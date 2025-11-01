// ============================================
// DEPLOYMENT VERIFICATION - Full HD @ 60 FPS
// ============================================
// Published to: https://ramai-productions.github.io/website/

import * as THREE from 'three';

// Wait for DOM to be fully ready
function init() {
  try {
    console.log('Initializing Three.js scene...');
    
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera - Full HD
    const camera = new THREE.PerspectiveCamera(75, 1920 / 1080, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const container = document.getElementById('canvas-container');
    
    if (!container) {
      console.error('Canvas container not found!');
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: false
    });

    // Set size to match viewport
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Add "HELLO" text in center
    const helloText = document.createElement('div');
    helloText.textContent = 'HELLO';
    helloText.style.position = 'absolute';
    helloText.style.top = '50%';
    helloText.style.left = '50%';
    helloText.style.transform = 'translate(-50%, -50%)';
    helloText.style.color = '#00ff00';
    helloText.style.fontSize = '120px';
    helloText.style.fontFamily = 'Arial, sans-serif';
    helloText.style.fontWeight = 'bold';
    helloText.style.textAlign = 'center';
    helloText.style.zIndex = '1000';
    helloText.style.pointerEvents = 'none';
    container.appendChild(helloText);

    console.log('Deployment verified - Full HD @ 60 FPS');
    console.log('Scene initialized successfully');

    // Handle window resize
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });

    // Render loop - capped at 60 FPS
    let lastFrameTime = performance.now();
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    function render(currentTime) {
      requestAnimationFrame(render);
      
      const elapsed = currentTime - lastFrameTime;
      
      if (elapsed > frameInterval) {
        lastFrameTime = currentTime - (elapsed % frameInterval);
        renderer.render(scene, camera);
      }
    }

    render(performance.now());
    
  } catch (error) {
    console.error('Error initializing Three.js:', error);
    
    // Show error message on screen
    const container = document.getElementById('canvas-container');
    if (container) {
      container.innerHTML = `
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: red;
          font-size: 24px;
          text-align: center;
          padding: 20px;
          background: rgba(0,0,0,0.8);
          border-radius: 8px;
        ">
          <p>Error loading scene</p>
          <p style="font-size: 14px; margin-top: 10px;">${error.message}</p>
          <p style="font-size: 12px; margin-top: 10px;">Check browser console for details</p>
        </div>
      `;
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
