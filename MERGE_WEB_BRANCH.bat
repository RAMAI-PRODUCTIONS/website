@echo off
echo ========================================
echo Merging web branch into main
echo ========================================
echo.

cd /d C:\website

echo Step 1: Checking out main branch...
git checkout main
echo.

echo Step 2: Pulling latest changes from main...
git pull origin main
echo.

echo Step 3: Checking if web branch exists...
git branch -a | findstr web
echo.

echo Step 4: Merging web branch into main...
git merge web --no-ff -m "Merge web branch into main"
echo.

echo Step 5: Pushing merged main to GitHub...
git push origin main
echo.

echo Step 6: Deleting local web branch...
git branch -d web
echo.

echo Step 7: Deleting remote web branch...
git push origin --delete web
echo.

echo ========================================
echo SUCCESS! Web branch merged and deleted
echo.
echo - web branch merged into main
echo - local web branch deleted
echo - remote web branch deleted
echo ========================================
pause

