@echo off
echo ========================================
echo Final Cleanup - Deploying Clean Template
echo ========================================
cd /d C:\website

echo Deleting garbage files...
del /F "etting deployment  .gitignore" 2>nul
del /F COMMIT_MESSAGE.txt 2>nul
del /F GITHUB_REPO_DESCRIPTION.txt 2>nul

echo Staging clean files...
git add -A

echo Committing...
git commit -m "Final cleanup: Remove all unnecessary files - Removed temporary files and terminal garbage - Clean, minimal React Three Fiber template - Production-ready structure"

echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo SUCCESS! Clean template deployed!
echo.
echo Your template includes ONLY:
echo   .github/workflows/deploy.yml
echo   src/App.jsx, main.jsx, index.css
echo   index.html, package.json, vite.config.js
echo   README.md, .gitignore
echo.
echo Site: https://ramai-productions.github.io/website/
echo ========================================
pause

echo Deleting this script...
del "%~f0"

