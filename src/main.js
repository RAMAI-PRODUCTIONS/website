// ============================================
// DEPLOYMENT VERIFICATION - Full HD @ 60 FPS
// ============================================

import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camera - Full HD
const camera = new THREE.PerspectiveCamera(75, 1920 / 1080, 0.1, 1000);
camera.position.z = 5;

// Renderer
const container = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer({
  powerPreference: 'high-performance',
  antialias: false
});

renderer.setSize(1920, 1080);
renderer.setPixelRatio(1);
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
