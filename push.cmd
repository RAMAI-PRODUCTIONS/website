@echo off
cd /d C:\website
git add -A
git commit -m "Fix: Single job workflow to resolve artifact issues"
git push origin main
echo.
echo PUSHED! Now:
echo 1. Make sure you DELETED the github-pages environment
echo 2. Wait 2 minutes for build
echo 3. Check: https://github.com/RAMAI-PRODUCTIONS/website/actions
pause

