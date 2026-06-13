import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.querySelector('canvas');

// SCENE 
const scene = new THREE.Scene();

//  CAMERA
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight,0.1,100);
camera.position.set(0, 2, 15);

// RENDERER 
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// HDRI 
const rgbeLoader = new RGBELoader();
rgbeLoader.load(
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/goegap_road_1k.hdr',
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    // scene.background = texture;
  }
);

// LIGHTS 
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

//  CONTROLS 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1, 0);

//  MODEL
let model; //  IMPORTANT (global reference)

const loader = new GLTFLoader();
loader.load('/car3D.glb', (gltf) => {
  model = gltf.scene;
  scene.add(model);

  model.rotation.y = 1.5;
  model.updateMatrixWorld(true);

  // STEP 1: BOX
  const box = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  box.getSize(size);

  // STEP 2: SCALE 
  const maxSize = Math.max(size.x, size.y, size.z);
  const desiredSize = 20;

  const scale = desiredSize / maxSize;
  model.scale.setScalar(scale);

  // STEP 3: CENTER 
  const box2 = new THREE.Box3().setFromObject(model);
  const center = box2.getCenter(new THREE.Vector3());

  model.position.sub(center);
});

//  Animate
function animate() {
  requestAnimationFrame(animate);

  // move car ONLY if loaded
  // if (model) {
  //   model.position.x += 0.01;
  //   model.position.y += 0.001; 
  // }
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize 
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});