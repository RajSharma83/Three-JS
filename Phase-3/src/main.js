import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color('lightgreen');
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.set(0, 0, 30);

const renderer = new THREE.WebGLRenderer({canvas,antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/* SphereGeometry */
// const geometry = new THREE.SphereGeometry( 15, 32, 16 );

/* CapsuleGeometry */
// const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8, 1 );

/* TorusKnotGeometry */
// const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

/* TorusGeometry */
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

const material = new THREE.MeshStandardMaterial({color: 'green',metalness: 0.5,roughness: 0.2, wireframe: true,});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Light
const light = new THREE.DirectionalLight('white', 1);
light.position.set(2, 2, 5);
scene.add(light);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
controls.target.set(0, 0, 0);

// Animation
function animate() {
requestAnimationFrame(animate);
torus.rotation.x += 0.005;
torus.rotation.y += 0.005;
controls.update(); 
renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});