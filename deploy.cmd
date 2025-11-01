@echo off
cd /d C:\website
git add -A
git commit -m "Deploy React Three Fiber - Clean repository - Added 3D scene with sphere and orbiting cubes - Removed temporary batch files - Production ready"
git push origin main
echo.
echo Deployment complete! Check: https://github.com/RAMAI-PRODUCTIONS/website/actions
pause

