import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color("lightblue");
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({canvas, antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.BoxGeometry(1, 1, 1);
/* MeshStandardMaterial --> Realism - High */
// const material = new THREE.MeshStandardMaterial({color: "gold",metalness:0.5,roughness: 0.2,wireframe:true});

/* MeshBasicMaterial --> Realism - Low */
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

/* MeshLambertMaterial --> Realism - Low - Medium */
// const material = new THREE.MeshLambertMaterial({color: 0x00ff00});

/* MeshPhongMaterial --> Realism - Medium */
// const material = new THREE.MeshPhongMaterial({color: 0x2194ce, shininess: 100});

/* MeshPhysicalMaterial --> Realism - Very high*/ 
const material = new THREE.MeshPhysicalMaterial({
  color: "#2194ce",
  metalness: 0.5,
  roughness: 0.1,
  transmission: 5.0, // makes it glass-like
  transparent: true,
  
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/* Add a directional light to the scene */
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);

/* Add a helper to visualize the light direction */
// const helper = new THREE.DirectionalLightHelper(light, 2);
// scene.add(helper);

/* Add a point light to the scene */
// const light = new THREE.PointLight(0xffffff, 50);
// light.position.set(0, 5, 0);
// scene.add(light);

/* Add a spotlight to the scene */
// const light = new THREE.SpotLight(0xffffff, 100);
// light.position.set(0, 10, 0);
// scene.add(light);

/* Add a hemisphere light to the scene */
const light = new THREE.HemisphereLight(
  0x87ceeb, // sky color
  0x444444, // ground color
  2
);

scene.add(light);

camera.position.z = 3;

// controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; 
controls.enableZoom = true; 
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0; 

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
});
