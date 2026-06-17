📚 What I Learned

🧱 Scene --> A space where all 3D objects are placed.
const scene = new THREE.Scene();

🎥 Camera --> Helps us see the 3D scene. (eye)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

📦 Geometry --> Creates the shape of the object (cube).
const geometry = new THREE.BoxGeometry(1, 1, 1);

🎨 Material --> Gives color to the object.
const material = new THREE.MeshBasicMaterial({ color: "blue" });

🧊 Mesh --> Combines shape + color to create a visible object.
const cube = new THREE.Mesh(geometry, material);

➕ Adding to Scene --> Adds objects into the 3D world.
scene.add(cube);

🖥️ Renderer --> Displays the 3D scene on the screen.
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

🔁 Animation Loop --> Runs the animation continuously.
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

⏱️ Clock (Time-based Animation) --> Used to rotate the cube smoothly over time.
let clock = new THREE.Clock();
cube.rotation.y = clock.getElapsedTime();


🚀 Result :
A simple blue cube that rotates smoothly in a 3D space.