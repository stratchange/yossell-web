# Script pour ouvrir Chrome avec le débogueur attaché
# Utilisez ce script si la configuration VS Code ne fonctionne pas

Write-Host "Attente que le serveur Next.js soit prêt..." -ForegroundColor Yellow

# Attendre que le serveur soit prêt
$port = 3003
$maxWait = 30
$elapsed = 0

while ($elapsed -lt $maxWait) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:$port" -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
        Write-Host "✓ Serveur prêt !" -ForegroundColor Green
        break
    } catch {
        Start-Sleep -Seconds 2
        $elapsed += 2
        Write-Host "." -NoNewline
    }
}

if ($elapsed -ge $maxWait) {
    Write-Host ""
    Write-Host "✗ Le serveur n'est pas prêt. Assurez-vous que 'npm run dev' est en cours d'exécution." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Ouverture de Chrome avec le débogueur..." -ForegroundColor Yellow

# Trouver Chrome
$chromePaths = @(
    "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "${env:LOCALAPPDATA}\Google\Chrome\Application\chrome.exe"
)

$chromePath = $null
foreach ($path in $chromePaths) {
    if (Test-Path $path) {
        $chromePath = $path
        break
    }
}

if (-not $chromePath) {
    Write-Host "✗ Chrome n'a pas été trouvé. Veuillez installer Google Chrome." -ForegroundColor Red
    exit 1
}

# Créer un répertoire temporaire pour le profil de débogage
$debugProfile = Join-Path $env:TEMP "chrome-debug-$(Get-Random)"
New-Item -ItemType Directory -Path $debugProfile -Force | Out-Null

# Lancer Chrome avec le débogueur
Start-Process -FilePath $chromePath -ArgumentList @(
    "--remote-debugging-port=9222",
    "--user-data-dir=$debugProfile",
    "http://localhost:$port"
)

Write-Host "✓ Chrome ouvert avec le débogueur sur le port 9222" -ForegroundColor Green
Write-Host "Vous pouvez maintenant utiliser la configuration 'Attacher à Chrome' dans VS Code" -ForegroundColor Cyan

