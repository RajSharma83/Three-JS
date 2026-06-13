import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'lil-gui';

const canvas = document.querySelector('canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color('lightgreen');
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.set(0, 0, 30);

const renderer = new THREE.WebGLRenderer({canvas,antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const loader = new THREE.TextureLoader();
const color = loader.load('asset/color.jpg');
const normal = loader.load('asset/normal.jpg');
const roughness = loader.load('asset/roughness.jpg');
const height = loader.load('asset/height.jpg');

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ map: color, normalMap: normal, roughnessMap: roughness, displacementMap: height, displacementScale: 0.1 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const light = new THREE.DirectionalLight('white', 2);
light.position.set(2, 2, 2);
scene.add(light);

const helper = new THREE.DirectionalLightHelper(light, 2);
scene.add(helper);

const pointLight = new THREE.PointLight('white', 1);
pointLight.position.set(-2, -2, -2);
scene.add(pointLight);

const gui = new GUI();
const debugObject = {
  displacementScale: 0.1,
};

const materialFolder = gui.addFolder('Material');
materialFolder.add(debugObject, 'displacementScale', 0, 1, 0.01).name('Displacement').onChange((value) => {
  material.displacementScale = value;
});
materialFolder.add(material, 'roughness', 0, 1, 0.01).name('Roughness');
materialFolder.add(material, 'metalness', 0, 1, 0.01).name('Metalness');
materialFolder.add(material, 'wireframe').name('Wireframe');

const meshFolder = gui.addFolder('Mesh');
meshFolder.add(cube.position, 'x', -5, 5, 0.1).name('Position X');
meshFolder.add(cube.position, 'y', -5, 5, 0.1).name('Position Y');
meshFolder.add(cube.position, 'z', -5, 5, 0.1).name('Position Z');
meshFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01).name('Rotation X');
meshFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01).name('Rotation Y');
meshFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01).name('Rotation Z');
meshFolder.add(cube.scale, 'x', 0.1, 3, 0.1).name('Scale X');
meshFolder.add(cube.scale, 'y', 0.1, 3, 0.1).name('Scale Y');
meshFolder.add(cube.scale, 'z', 0.1, 3, 0.1).name('Scale Z');

gui.add(ambientLight, 'intensity', 0, 2, 0.01).name('Ambient Light');
gui.add(light, 'intensity', 0, 5, 0.1).name('Directional Light');
gui.add(pointLight, 'intensity', 0, 5, 0.1).name('Point Light');

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;

function animate() {
requestAnimationFrame(animate);
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