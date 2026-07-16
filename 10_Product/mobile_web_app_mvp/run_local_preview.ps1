param(
  [int]$Port = 8080,
  [switch]$Lan
)

$ErrorActionPreference = "Stop"
$AppDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Bind = if ($Lan) { "0.0.0.0" } else { "127.0.0.1" }

$PythonCandidates = @(
  "python",
  "py",
  "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
)

$Python = $null
foreach ($candidate in $PythonCandidates) {
  try {
    if ($candidate -eq "py") {
      & $candidate --version *> $null
    } else {
      & $candidate --version *> $null
    }
    $Python = $candidate
    break
  } catch {
    continue
  }
}

if (-not $Python) {
  Write-Host "Python was not found. Install Python or run from Codex with bundled runtime available." -ForegroundColor Red
  exit 1
}

Write-Host "ACI-OS mobile web app preview" -ForegroundColor Cyan
Write-Host "Folder: $AppDir"
Write-Host "Local URL: http://127.0.0.1:$Port"

if ($Lan) {
  $ip = Get-NetIPAddress -AddressFamily IPv4 |
    Where-Object { $_.IPAddress -notlike "127.*" -and $_.PrefixOrigin -ne "WellKnown" } |
    Select-Object -First 1 -ExpandProperty IPAddress
  if ($ip) {
    Write-Host "iPhone URL on same Wi-Fi: http://$ip`:$Port" -ForegroundColor Yellow
  }
  Write-Host "LAN mode may require Windows Firewall permission." -ForegroundColor Yellow
}

Write-Host "Press Ctrl+C to stop."
Set-Location $AppDir
& $Python -m http.server $Port --bind $Bind
