# Script pour nettoyer et redémarrer le serveur Next.js

Write-Host "Arrêt des processus Node.js..." -ForegroundColor Yellow
taskkill /F /IM node.exe 2>&1 | Out-Null
Start-Sleep -Seconds 2

Write-Host "Nettoyage du cache Next.js..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1
if (Test-Path .next) {
    Write-Host "ERREUR: Impossible de supprimer .next - fichiers verrouillés" -ForegroundColor Red
    Write-Host "Fermez VS Code et tous les autres programmes qui utilisent ce dossier" -ForegroundColor Yellow
    exit 1
} else {
    Write-Host "✓ Cache .next supprimé" -ForegroundColor Green
}

Write-Host ""
Write-Host "Démarrage du serveur Next.js..." -ForegroundColor Yellow
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Cyan
Write-Host ""

$env:NODE_OPTIONS = "--max-old-space-size=4096"
npm run dev

