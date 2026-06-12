import * as THREE from 'three';

// Create a new 3D scene (this is where all objects exist)
const scene = new THREE.Scene();

// Create a camera (defines what we see)
// PerspectiveCamera = realistic camera (like human eye)
const camera = new THREE.PerspectiveCamera(
  75, // field of view (how wide we see)
  window.innerWidth / window.innerHeight, // aspect ratio (prevents stretching)
  0.1, // near clipping plane (how close we can see)
  1000 // far clipping plane (how far we can see)
);

// Select the canvas element from HTML
let canvas = document.querySelector("canvas");

// Create WebGL renderer (this draws everything on screen)
// We pass canvas so Three.js uses existing canvas instead of creating new one
const renderer = new THREE.WebGLRenderer({ canvas });

// Set renderer size to full window
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a cube geometry (shape definition)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create material (appearance of object: color, texture, etc.)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Combine geometry + material into a mesh (final 3D object)
const cube = new THREE.Mesh(geometry, material);

// Add cube to the scene
scene.add(cube);

// Move camera backwards so we can see the cube
camera.position.z = 5;

// Handle window resize (make scene responsive)
window.addEventListener('resize', () => {

  // Update renderer size to match new window size
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Update camera aspect ratio to prevent stretching
  camera.aspect = window.innerWidth / window.innerHeight;

  // Required after changing camera properties
  camera.updateProjectionMatrix();
});

// Animation loop (runs 60 times per second)
function animate() {

  // Request next frame (creates smooth loop)
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render scene from camera perspective
  renderer.render(scene, camera);
}

// Start animation loop
animate();