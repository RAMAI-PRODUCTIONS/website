@echo off
echo ========================================
echo Syncing merged branches and deploying
echo ========================================
echo.

cd /d C:\website

echo Step 1: Pulling merged changes from GitHub...
git pull origin main
echo.

echo Step 2: Checking current status...
git status
echo.

echo Step 3: Staging all changes (React Three Fiber scene)...
git add .
echo.

echo Step 4: Committing...
git commit -m "Deploy React Three Fiber with sphere and cubes - Merged branches - Added bouncing sphere and orbiting cubes - Enhanced 3D scene with multiple objects"
echo.

echo Step 5: Pushing to GitHub Pages...
git push origin main
echo.

echo ========================================
echo DEPLOYMENT COMPLETE!
echo.
echo Check deployment:
echo https://github.com/RAMAI-PRODUCTIONS/website/actions
echo.
echo Your site will be live at:
echo https://ramai-productions.github.io/website/
echo.
echo Scene includes:
echo - Green rotating cube (center)
echo - Magenta bouncing sphere (wireframe)
echo - 4 colored orbiting cubes
echo - HELLO text overlay
echo ========================================
pause

