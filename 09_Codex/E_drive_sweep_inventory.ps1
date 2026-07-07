$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSCommandPath)
$root = "E:\"
$outDir = Join-Path $repoRoot "99_Parked"
$stagingDir = Join-Path $outDir "E_staging"
$inventoryPath = Join-Path $outDir "E_drive_inventory.md"

if (-not (Test-Path -LiteralPath $root)) {
  throw "Drive not found: $root"
}

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
if (Test-Path -LiteralPath $stagingDir) {
  $resolvedStaging = (Resolve-Path -LiteralPath $stagingDir).Path
  $resolvedRepo = (Resolve-Path -LiteralPath $repoRoot).Path
  if (-not $resolvedStaging.StartsWith($resolvedRepo, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to clear staging outside repo: $resolvedStaging"
  }
  Remove-Item -LiteralPath $stagingDir -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $stagingDir | Out-Null

$extensions = @(
  ".pptx", ".ppt", ".odp", ".pdf",
  ".docx", ".doc", ".odt", ".rtf",
  ".txt", ".md", ".xlsx", ".xls", ".csv"
)

$keywordPattern = '(?i)compliance|cms|korupcj|corruption|sankcj|sanctions|kodeks|code\s*of\s*conduct|etyk|ethics|due\s*diligence|whistleblow|sygnali|konflikt\s*interes|conflict\s*of\s*interest|szkolen|training|fcpa|antitrust|antymonopol|aml|investigation|dochodzen|audyt|audit|bribery|fraud|speak[\s-]?up|hotline|third[\s-]?party|integrity|uczciw|abac|gift|hospitality|prezent|governance'
$excludedPathPattern = '(?i)\\System Volume Information\\|\\\$RECYCLE\.BIN\\'
$sensitivePattern = '(?i)\\Praca\b|\\PRACA|\\DELL20|\\MS Pharma\\|\\PRIVATE\b|private|quarterly|kwartal|client|klient|matter|case file|sprawa|real matter|named company|confidential|poufne|board pack|minutes|protoko|report to board|raport zarz|whistleblower report|sygnalist|personal data|dane osobowe|agreement|contract|execution version|umowa|compliance update for|vifor|pfizer|roche|novartis|sandoz|teva|msd|gbo'

function Normalize-Name([string]$value) {
  if ([string]::IsNullOrWhiteSpace($value)) { return "" }
  return (($value.ToLowerInvariant() -replace '[^a-z0-9]+', '') -replace '\s+', '')
}

function Shorten([string]$value, [int]$max = 220) {
  if ([string]::IsNullOrWhiteSpace($value)) { return "" }
  $clean = (($value -replace '\s+', ' ').Trim())
  if ($clean.Length -le $max) { return $clean }
  return $clean.Substring(0, $max - 3) + "..."
}

function Escape-Md([string]$value) {
  if ($null -eq $value) { return "" }
  return (($value -replace '\|', '\|') -replace "`r?`n", " ")
}

function Read-ZipTextEntry($zip, [string]$entryName) {
  $entry = $zip.Entries | Where-Object { $_.FullName -eq $entryName } | Select-Object -First 1
  if ($null -eq $entry) { return "" }
  $reader = New-Object System.IO.StreamReader($entry.Open())
  try {
    return $reader.ReadToEnd()
  } finally {
    $reader.Dispose()
  }
}

function Xml-To-Text([string]$xml) {
  if ([string]::IsNullOrWhiteSpace($xml)) { return "" }
  $text = $xml -replace '<[^>]+>', ' '
  $text = [System.Net.WebUtility]::HtmlDecode($text)
  return Shorten $text 220
}

function Get-CheapTitle([string]$path, [string]$ext) {
  try {
    if ($ext -in @(".txt", ".md", ".csv")) {
      $line = Get-Content -LiteralPath $path -TotalCount 20 -ErrorAction Stop |
        Where-Object { -not [string]::IsNullOrWhiteSpace($_) } |
        Select-Object -First 1
      return Shorten $line 220
    }

    if ($ext -in @(".docx", ".pptx", ".odt", ".odp", ".xlsx")) {
      Add-Type -AssemblyName System.IO.Compression.FileSystem -ErrorAction SilentlyContinue
      $zip = [System.IO.Compression.ZipFile]::OpenRead($path)
      try {
        $core = Read-ZipTextEntry $zip "docProps/core.xml"
        if ($core -match '<dc:title[^>]*>(.*?)</dc:title>') {
          $title = [System.Net.WebUtility]::HtmlDecode(($matches[1] -replace '<[^>]+>', ' ')).Trim()
          if (-not [string]::IsNullOrWhiteSpace($title)) { return Shorten $title 220 }
        }
        if ($ext -eq ".docx") { return Xml-To-Text (Read-ZipTextEntry $zip "word/document.xml") }
        if ($ext -eq ".pptx") { return Xml-To-Text (Read-ZipTextEntry $zip "ppt/slides/slide1.xml") }
        if ($ext -in @(".odt", ".odp")) { return Xml-To-Text (Read-ZipTextEntry $zip "content.xml") }
        if ($ext -eq ".xlsx") { return Xml-To-Text (Read-ZipTextEntry $zip "xl/sharedStrings.xml") }
      } finally {
        $zip.Dispose()
      }
    }

    if ($ext -eq ".pdf") {
      $fs = [System.IO.File]::OpenRead($path)
      try {
        $len = [Math]::Min(131072, [int]$fs.Length)
        $bytes = New-Object byte[] $len
        [void]$fs.Read($bytes, 0, $len)
        $ascii = [System.Text.Encoding]::ASCII.GetString($bytes)
        if ($ascii -match '/Title\s*\(([^)]{1,220})\)') { return Shorten $matches[1] 220 }
      } finally {
        $fs.Dispose()
      }
    }
  } catch {
    return ""
  }
  return ""
}

$repoNames = @{}
Get-ChildItem -LiteralPath $repoRoot -Recurse -File -ErrorAction SilentlyContinue |
  ForEach-Object {
    $repoNames[(Normalize-Name $_.BaseName)] = $true
  }

$allFiles = Get-ChildItem -LiteralPath $root -Recurse -File -Force -ErrorAction SilentlyContinue |
  Where-Object {
    $_.FullName -notmatch $excludedPathPattern -and
    $extensions -contains $_.Extension.ToLowerInvariant()
  }

$candidates = New-Object System.Collections.Generic.List[object]

foreach ($file in $allFiles) {
  $path = $file.FullName
  if ($path -notmatch $keywordPattern) { continue }

  $ext = $file.Extension.ToLowerInvariant()
  $title = Get-CheapTitle $path $ext
  $norm = Normalize-Name $file.BaseName

  $confidential = $false
  $confReasons = New-Object System.Collections.Generic.List[string]
  if ($path -match $sensitivePattern) {
    $confidential = $true
    $confReasons.Add("sensitive path/name pattern") | Out-Null
  }

  $dedupeFlags = New-Object System.Collections.Generic.List[string]
  if ($repoNames.ContainsKey($norm)) {
    $dedupeFlags.Add("LIKELY-REPO-COPY") | Out-Null
  }
  if ($path -match '(?i)WYKLADY2024|SGH|Code of Ethics|Culture of Integrity|Wyzwania|CMS|FCPA Guide|Third.?Party|Organizational Culture') {
    $dedupeFlags.Add("LIKELY-GDRIVE-CORPUS") | Out-Null
  }

  $hash = ""
  try {
    if ($file.Length -le 200MB) {
      $hash = (Get-FileHash -Algorithm SHA256 -LiteralPath $path -ErrorAction Stop).Hash
    }
  } catch {
    $hash = ""
  }

  $candidates.Add([pscustomobject]@{
    Path = Split-Path -Parent $path
    Filename = $file.Name
    FullName = $path
    Type = $ext.TrimStart(".").ToUpperInvariant()
    SizeBytes = [int64]$file.Length
    SizeMB = [Math]::Round($file.Length / 1MB, 2)
    Date = $file.LastWriteTime.ToString("yyyy-MM-dd HH:mm")
    Title = $title
    Hash = $hash
    Confidential = $confidential
    ConfidentialReason = ($confReasons -join "; ")
    DedupeFlag = if ($dedupeFlags.Count -gt 0) { ($dedupeFlags -join "; ") } else { "UNIQUE-CANDIDATE" }
    StageDecision = ""
  }) | Out-Null
}

$hashGroups = $candidates |
  Where-Object { -not [string]::IsNullOrWhiteSpace($_.Hash) } |
  Group-Object Hash |
  Where-Object { $_.Count -gt 1 }

$duplicateHashes = @{}
foreach ($group in $hashGroups) {
  $first = $true
  foreach ($item in $group.Group | Sort-Object FullName) {
    if ($first) { $first = $false; continue }
    $duplicateHashes[$item.FullName] = $true
  }
}

$stagedCount = 0
$excludedCount = 0

foreach ($item in $candidates) {
  if ($duplicateHashes.ContainsKey($item.FullName)) {
    if ($item.DedupeFlag -eq "UNIQUE-CANDIDATE") {
      $item.DedupeFlag = "DUPLICATE-HASH"
    } else {
      $item.DedupeFlag += "; DUPLICATE-HASH"
    }
  }

  $shouldStage = (-not $item.Confidential) -and
    ($item.DedupeFlag -eq "UNIQUE-CANDIDATE") -and
    (-not $duplicateHashes.ContainsKey($item.FullName)) -and
    ($item.SizeBytes -le 100MB)

  if ($item.Confidential) {
    $item.StageDecision = "CONFIDENTIAL-EXCLUDED"
    $excludedCount++
    continue
  }

  if ($shouldStage) {
    $relative = $item.FullName.Substring($root.Length).TrimStart("\")
    $dest = Join-Path $stagingDir $relative
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $dest) | Out-Null
    Copy-Item -LiteralPath $item.FullName -Destination $dest -Force
    $item.StageDecision = "STAGED"
    $stagedCount++
  } elseif ($item.SizeBytes -gt 100MB) {
    $item.StageDecision = "NOT-STAGED-SIZE-OVER-100MB"
  } elseif ($item.DedupeFlag -ne "UNIQUE-CANDIDATE") {
    $item.StageDecision = "NOT-STAGED-DEDUPE-REVIEW"
  } else {
    $item.StageDecision = "NOT-STAGED-REVIEW"
  }
}

$sorted = $candidates | Sort-Object StageDecision, Path, Filename
$total = $candidates.Count
$unique = ($candidates | Where-Object { $_.DedupeFlag -eq "UNIQUE-CANDIDATE" -and -not $_.Confidential }).Count
$dedupeReviewCount = ($candidates | Where-Object { $_.StageDecision -eq "NOT-STAGED-DEDUPE-REVIEW" }).Count

$promising = $candidates |
  Where-Object { $_.StageDecision -eq "STAGED" } |
  Sort-Object @{Expression={
    $score = 0
    if ($_.FullName -match '(?i)training|szkolen|culture|integrity|ethics|third|due diligence|cms|risk|compliance|korupcj|sanctions') { $score += 5 }
    if ($_.Type -in @("PPTX","ODP","PDF","DOCX")) { $score += 2 }
    if ($_.SizeBytes -gt 0) { $score += 1 }
    -$score
  }}, SizeBytes -Descending |
  Select-Object -First 10

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add("# E Drive Inventory v0.1") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("Status: generated inventory and conservative local staging pass.") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')") | Out-Null
$lines.Add("") | Out-Null
$lines.Add('Root scanned: `E:\`') | Out-Null
$lines.Add("") | Out-Null
$lines.Add('Staging folder: `99_Parked/E_staging`') | Out-Null
$lines.Add("") | Out-Null
$lines.Add("## Counts") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("| Metric | Count |") | Out-Null
$lines.Add("| --- | ---: |") | Out-Null
$lines.Add("| Total compliance-related files found | $total |") | Out-Null
$lines.Add("| Unique non-confidential candidates | $unique |") | Out-Null
$lines.Add("| Staged locally | $stagedCount |") | Out-Null
$lines.Add("| Confidential-excluded | $excludedCount |") | Out-Null
$lines.Add("| Duplicate / likely already-codified review items | $dedupeReviewCount |") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("## Notes") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("- This inventory uses filename and folder-name keyword matching plus cheap metadata/title extraction where possible.") | Out-Null
$lines.Add("- CONFIDENTIAL-EXCLUDED means inventoried but not copied to staging.") | Out-Null
$lines.Add("- LIKELY-GDRIVE-CORPUS means likely overlap with already-codified lecture/corpus material; review before extraction.") | Out-Null
$lines.Add("- STAGED means copied to local 99_Parked/E_staging for further review.") | Out-Null
$lines.Add("- Google Drive upload was not performed by this script.") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("## Top 10 Promising Staged Unique Items") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("| # | Path | Filename | Type | Size MB | Date | Why promising |") | Out-Null
$lines.Add("| ---: | --- | --- | --- | ---: | --- | --- |") | Out-Null
$rank = 1
foreach ($item in $promising) {
  $why = "matches compliance keywords; staged for non-confidential review"
  $lines.Add("| $rank | $(Escape-Md $item.Path) | $(Escape-Md $item.Filename) | $($item.Type) | $($item.SizeMB) | $($item.Date) | $(Escape-Md $why) |") | Out-Null
  $rank++
}
$lines.Add("") | Out-Null
$lines.Add("## Full Inventory") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("| path | filename | type | size MB | date | first-line/title if cheaply readable | dedupe flag | staging / exclusion |") | Out-Null
$lines.Add("| --- | --- | --- | ---: | --- | --- | --- | --- |") | Out-Null
foreach ($item in $sorted) {
  $flag = if ($item.Confidential) { "CONFIDENTIAL-EXCLUDED: $($item.ConfidentialReason)" } else { $item.DedupeFlag }
  $lines.Add("| $(Escape-Md $item.Path) | $(Escape-Md $item.Filename) | $($item.Type) | $($item.SizeMB) | $($item.Date) | $(Escape-Md $item.Title) | $(Escape-Md $flag) | $(Escape-Md $item.StageDecision) |") | Out-Null
}
$lines.Add("") | Out-Null
$lines.Add("## Change Log") | Out-Null
$lines.Add("") | Out-Null
$lines.Add("v0.1 - generated E-drive compliance inventory and conservative local staging pass.") | Out-Null

[System.IO.File]::WriteAllLines($inventoryPath, $lines, [System.Text.UTF8Encoding]::new($false))
Write-Output "Inventory written: $inventoryPath"
Write-Output "Staging folder: $stagingDir"
Write-Output "Total found: $total"
Write-Output "Unique non-confidential candidates: $unique"
Write-Output "Staged locally: $stagedCount"
Write-Output "Confidential excluded: $excludedCount"
