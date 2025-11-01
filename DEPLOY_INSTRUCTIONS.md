# GitHub Deployment Instructions

## Repository Information
- **Project:** Three.js Minimal Test Pipeline
- **Description:** Minimal Three.js scene with Full HD rendering at 60 FPS for cross-platform game development testing
- **Topics:** threejs, webgl, game-development, vite, fullhd, 60fps, minimal

## Quick Deploy Steps

### 1. Initialize Git Repository
```bash
cd C:\JS_ENGINE
git init
git add .
git commit -m "Initial commit: Three.js minimal test pipeline

- Minimal Three.js scene (blank black world)
- Full HD resolution (1920x1080)
- 60 FPS capped rendering
- Bundle size: ~460 KB
- GitHub Actions auto-deploy setup
- Vite build pipeline"
```

### 2. Create GitHub Repository

Go to: https://github.com/new

Fill in:
- **Repository name:** `threejs-minimal-test` (or your choice)
- **Description:** Minimal Three.js scene - Full HD @ 60 FPS - Testing export size and pipeline for cross-platform game development
- **Public:** ✓ (required for GitHub Pages free tier)
- **Initialize:** Leave all unchecked

### 3. Link and Push

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` below:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Wait for deployment (1-2 minutes)
5. Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Repository Topics (Add in Settings)

Add these topics to your repository for better discoverability:
- `threejs`
- `webgl`
- `game-development`
- `vite`
- `fullhd`
- `60fps`
- `minimal`
- `cross-platform`
- `pipeline-test`

## Future Commits

When making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Actions will automatically rebuild and redeploy.

## Verification

After deployment, your site should show:
- Black background
- Green "HELLO" text in center
- Console log: "Deployment verified - Full HD @ 60 FPS"
- No errors

## Bundle Information

- **Uncompressed:** 461 KB (index.html + JS bundle)
- **Gzipped:** ~117 KB
- **Files:** 2 (index.html + bundled JS)
- **Dependencies:** None (Three.js bundled)

