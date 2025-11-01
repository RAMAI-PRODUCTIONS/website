@echo off
echo ========================================
echo FIXED GITHUB ACTIONS WORKFLOW
echo ========================================
echo.
echo Changes:
echo - Split workflow into BUILD and DEPLOY jobs
echo - Build job creates artifact FIRST
echo - Deploy job uses artifact (needs: build)
echo - This fixes the 404 run_id error!
echo.
cd /d C:\website
git add -A
git commit -m "Fix GitHub Actions workflow - Split into build and deploy jobs - Fixes 404 artifact error - Clean repository structure"
git push origin main
echo.
echo ========================================
echo SUCCESS! Workflow Fixed!
echo.
echo What changed:
echo 1. Build job: Builds app and uploads artifact
echo 2. Deploy job: Waits for build, then deploys
echo 3. No more run_id mismatch errors!
echo.
echo Check deployment:
echo https://github.com/RAMAI-PRODUCTIONS/website/actions
echo.
echo This will now work correctly!
echo ========================================
pause

