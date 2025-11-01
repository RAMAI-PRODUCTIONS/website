@echo off
echo ========================================
echo Deploying React Three Fiber with:
echo - Rotating green cube (center)
echo - Bouncing magenta sphere (left)
echo - 4 orbiting colored cubes
echo - Enhanced lighting
echo ========================================
echo.

cd /d C:\website

echo Staging all changes...
git add .

echo Committing...
git commit -m "Add 3D scene with sphere and multiple cubes

- Added bouncing magenta wireframe sphere
- Added 4 orbiting cubes (cyan, yellow, red, blue)
- Enhanced lighting with point light
- All objects animated with React Three Fiber hooks
- Ready for GitHub Pages deployment"

echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo SUCCESS! Deployment initiated!
echo.
echo Check build progress:
echo https://github.com/RAMAI-PRODUCTIONS/website/actions
echo.
echo Your site will be live in 2-3 minutes at:
echo https://ramai-productions.github.io/website/
echo.
echo What you'll see:
echo - Green rotating cube (center)
echo - Magenta bouncing sphere (left, wireframe)
echo - 4 small cubes orbiting around the scene
echo - "HELLO" text overlay
echo ========================================
pause

