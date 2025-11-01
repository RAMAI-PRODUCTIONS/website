@echo off
echo ========================================
echo Deploying React Three Fiber to GitHub
echo ========================================
echo.

cd /d C:\website

echo Step 1: Checking git status...
git status
echo.

echo Step 2: Staging all changes...
git add .
echo.

echo Step 3: Committing changes...
git commit -m "Deploy React Three Fiber to GitHub Pages - Converted from vanilla Three.js to React Three Fiber - Added rotating 3D cube with HTML overlay - React 18 + R3F + @react-three/drei - Updated build pipeline for React"
echo.

echo Step 4: Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo Deployment complete!
echo Check: https://github.com/RAMAI-PRODUCTIONS/website/actions
echo ========================================
pause

