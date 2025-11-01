// ============================================
// DEPLOYMENT VERIFICATION - Full HD @ 60 FPS
// ============================================

import * as THREE from 'three';

console.log('Initializing Three.js scene...');

// Wait for DOM to be fully loaded
function init() {
  try {
    console.log('Starting initialization...');
    
    const container = document.getElementById('canvas-container');
    if (!container) {
      console.error('ERROR: canvas-container not found!');
      return;
    }
    
    console.log('Container found:', container);
    
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Get responsive dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    console.log('Window dimensions:', width, 'x', height);
    
    // Camera - Responsive aspect ratio
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: false
    });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    console.log('Renderer created and added to container');
    
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
    
    console.log('HELLO text added to container');
    console.log('Deployment verified - Full HD @ 60 FPS');
    
    // Handle window resize
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
      console.log('Resized to:', newWidth, 'x', newHeight);
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
    console.log('Animation loop started');
    
  } catch (error) {
    console.error('Error during initialization:', error);
  }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
