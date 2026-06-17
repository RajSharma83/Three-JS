const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight,0.1,1000,);

camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const cube = new THREE.Mesh(geometry, material);

      // Position of the camera //
// cube.position.x = 3;
// cube.position.y = -1.3;
// cube.position.z = 8;

      // Scale of the camera //
// cube.scale.x = 2.5;
// cube.scale.y = 3.5;
// cube.scale.z = 2.5;

     // Rotation of the camera //
// cube.rotation.y = 1;    
// cube.rotation.x = 0.5; 
// cube.rotation.z = 0.5;

scene.add(cube);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   cube.rotation.y += 0.01;
//   cube.rotation.x += 0.01;
//   cube.rotation.z += 0.01;
// }
// animate();

let clock = new THREE.Clock();
function animate(){
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.y = clock.getElapsedTime();
}
animate();


//  clock.getElapsedTime() -->  🕒 The total time (in seconds) since the clock started
  //   It’s mainly used for smooth animations based on time, instead of frame count.
  //   This makes the cube rotate at the same speed on:

  //     60 FPS monitors
  //     144 FPS monitors
  //     slow computers

  // Because it's based on real time, not frames.