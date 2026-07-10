$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSCommandPath)
$output = Join-Path $repoRoot "10_Product\Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md"

$files = @(
  "00_foundation\Foundation_Map_v1.0.md",
  "07_Research\Source_Register_v0.1.md",
  "07_Research\External_Source_And_Example_Use_Rule_v0.1.md",
  "03_Kruk_Principles\Kruk_Way_Operating_Doctrines_v0.1.md",
  "03_Kruk_Principles\Kruk_Way_Leadership_v0.1.md",
  "03_Kruk_Principles\Case_The_Last_Control_v1.0.md",
  "10_Product\Chief_Consigliere_Response_Front_Door_Rules_v0.1.md",
  "10_Product\ACI_OS_Document_Standards_v1_0.md",
  "04_Methodology\Decision_Front_Door_Spec_v0.1.md",
  "04_Methodology\Question_Mode_Router_v0.1.md",
  "04_Methodology\Response_Pattern_Cards_v0.2.md",
  "04_Methodology\Legal_Compliance_Role_Boundary_v0.1.md",
  "04_Methodology\Compliance_Relationship_Lifecycle_v0.1.md",
  "04_Methodology\Third_Party_Lifecycle_Kruk_Method_v1_0.md",
  "04_Methodology\Compliance_Risk_Assessment_Standards_First_v0.1.md",
  "04_Methodology\Training_Design_Schema_Kruk_v1_0.md",
  "04_Methodology\Culture_Of_Integrity_Diagnostic_v0.1.md",
  "04_Founder_Method\Upward_Management_Kit_v0.1.md",
  "04_Founder_Method\Compliance_Organization_Person_First_v0.1.md",
  "04_Founder_Method\Risk_Assessment_After_Joining_v0.1.md",
  "05_Experts\Cultural_Calibration_Pack_v0.1.md",
  "05_Experts\Sports_Media_Compliance_Source_Routing_v0.1.md",
  "05_Experts\Sanctions_Report_Mode_Bridge_v0.1.md",
  "05_Experts\Sanctions_Expert_Route_v0.1.1.md"
)

$header = @"
# Chief Consigliere GPT Knowledge Bundle v0.1

Status: generated upload bundle for ChatGPT GPT Knowledge.

Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm")

Purpose: upload this single file instead of many separate Knowledge files. Do not upload Gate 2 tests, transcripts, failure logs, journal, parked inbox, raw attachments, or private notes.

Instruction file remains separate: paste `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.2_under8000.md` into the GPT Instructions box.

---

"@

$parts = New-Object System.Collections.Generic.List[string]
$parts.Add($header)

foreach ($relative in $files) {
  $path = Join-Path $repoRoot $relative
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Missing file for GPT Knowledge Bundle: $relative"
  }

  $content = Get-Content -LiteralPath $path -Raw
  $parts.Add("`n`n# Bundle Source: $relative`n`n")
  $parts.Add($content.Trim())
  $parts.Add("`n`n---`n")
}

[System.IO.File]::WriteAllText($output, ($parts -join ""), [System.Text.UTF8Encoding]::new($false))
Write-Output "Created $output"
