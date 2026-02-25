# Script pour attendre que le serveur Next.js soit prêt
param(
    [int]$Port = 3003,
    [int]$MaxWait = 60
)

$elapsed = 0
$interval = 2

Write-Host "Attente du serveur sur le port $Port..." -ForegroundColor Yellow

while ($elapsed -lt $MaxWait) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:$Port" -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
        Write-Host "✓ Serveur prêt sur le port $Port !" -ForegroundColor Green
        exit 0
    } catch {
        Start-Sleep -Seconds $interval
        $elapsed += $interval
        Write-Host "." -NoNewline
    }
}

Write-Host ""
Write-Host "✗ Le serveur n'est pas prêt après $MaxWait secondes" -ForegroundColor Red
exit 1

