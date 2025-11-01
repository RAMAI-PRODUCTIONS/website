@echo off
echo ========================================
echo FIXING DEPLOYMENT - AFTER DELETING ENVIRONMENT
echo ========================================
echo.
echo IMPORTANT: Make sure you DELETED the github-pages environment first!
echo Go to: https://github.com/RAMAI-PRODUCTIONS/website/settings/environments
echo.
pause
echo.

cd /d C:\website

echo Staging changes...
git add .

echo Committing...
git commit -m "Fix: Trigger fresh deployment after environment cleanup"

echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo Done! Now check GitHub Actions:
echo https://github.com/RAMAI-PRODUCTIONS/website/actions
echo.
echo This time it should work because:
echo 1. You deleted the broken environment
echo 2. GitHub will create a fresh one automatically
echo ========================================
pause

