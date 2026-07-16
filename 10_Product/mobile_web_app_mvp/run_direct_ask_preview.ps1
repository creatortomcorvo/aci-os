param(
  [int]$Port = 8080,
  [switch]$Lan
)

$ErrorActionPreference = "Stop"
$AppDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Node = "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if (-not (Test-Path $Node)) {
  $Node = "node"
}

if (-not (Test-Path (Join-Path $AppDir ".env"))) {
  Write-Host "Missing .env file." -ForegroundColor Red
  Write-Host "Copy .env.example to .env and paste a NEW OpenAI API key there. Do not reuse the key pasted into chat." -ForegroundColor Yellow
  exit 1
}

$env:PORT = "$Port"
$env:HOST = if ($Lan) { "0.0.0.0" } else { "127.0.0.1" }

Write-Host "ACI-OS direct Ask prototype" -ForegroundColor Cyan
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
& $Node server.js
