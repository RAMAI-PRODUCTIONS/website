# Three.js Test Pipeline

Minimal Three.js deployment test for cross-platform game development.

## Live Demo

🎮 **[View Live Site](https://ramai-productions.github.io/website/)**

## Features

- ✅ Blank Three.js scene
- ✅ Full HD resolution (1920x1080)
- ✅ 60 FPS capped rendering
- ✅ Minimal bundle size (~460 KB)
- ✅ No dependencies (Three.js bundled)

## Build Statistics

- **Total Size:** 453.49 KB
- **JS Bundle:** 452.45 KB (gzip: ~116 KB)
- **HTML:** 1.04 KB
- **Build Time:** ~6 seconds

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Deploy to GitHub Pages

This repository is configured with GitHub Actions for automatic deployment.
Every push to `main` branch will rebuild and deploy automatically.

## Next Steps

- Custom Three.js integration for Android, Windows, Linux, Web
- Crossplay multiplayer implementation

---

Built with [Vite](https://vitejs.dev/) + [Three.js](https://threejs.org/)
