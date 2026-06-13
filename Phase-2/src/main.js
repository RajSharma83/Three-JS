import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color("lightgreen");
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({canvas, antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({color: "red",metalness:0.5,roughness: 0.2,wireframe: false});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight("white", 1);
light.position.set(2, 2, 5);
scene.add(light);

camera.position.z = 3;

// controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; // for smooth camera movement
controls.enableZoom = true; // allow zooming
controls.autoRotate = true; // enable auto-rotation
controls.autoRotateSpeed = 2.0; // set auto-rotation speed

function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();  // update controls (required when enableDamping or autoRotate is true)
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
