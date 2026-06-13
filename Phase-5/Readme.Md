### 📘 Phase 5: 3D Model Implementation in Three.js
📌 Overview ->
In this phase, I implemented loading and rendering a real-world 3D .glb model (car) in a Three.js scene. The goal was to work with external 3D assets and learn how to properly load, scale, center, and render models realistically using environment lighting.

This phase is an important step toward building real-world 3D applications such as product viewers, car configurators, and interactive WebGL experiences.

### 🧠 What I Learned About 3D Models -

 - 🚗 Loading 3D Models (GLTFLoader)
 Three.js provides GLTFLoader to load .glb / .gltf models into the scene.

 const loader = new GLTFLoader();
 loader.load('/car3D.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
});

✔ Used for importing real-world 3D assets
✔ Supports geometry, materials, textures, and animations

- 📦 Understanding Model Structure

A .glb file typically contains:

Geometry (shape)
Materials (surface appearance)
Textures (surface detail)
Optional animations

- 📏 Auto Scaling the Model

Models from external sources often come in different sizes. Scaling ensures consistent fitting within the scene.

const box = new THREE.Box3().setFromObject(model);
const size = new THREE.Vector3();
box.getSize(size);

const maxSize = Math.max(size.x, size.y, size.z);
const desiredSize = 20;

const scale = desiredSize / maxSize;
model.scale.setScalar(scale);

✔ Ensures uniform sizing
✔ Prevents oversized or tiny models
✔ Improves scene composition

- 🎯 Centering the Model

Imported models are often not centered in world space. This step fixes alignment.

const box2 = new THREE.Box3().setFromObject(model);
const center = box2.getCenter(new THREE.Vector3());

model.position.sub(center);

✔ Aligns model to scene origin
✔ Improves camera focus and framing

- 🌍 HDR Environment Lighting

HDRI lighting enhances realism through accurate reflections and ambient environment lighting.

const rgbeLoader = new RGBELoader();

rgbeLoader.load(
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/goegap_road_1k.hdr',
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
  }
);

✔ Adds realistic reflections
✔ Improves material lighting response
✔ Gives professional-quality rendering

- 💡 Lighting Setup

🌤 Ambient Light

Provides soft global illumination.

☀️ Directional Light

Simulates sunlight and adds depth and shadows.

scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

- 🎮 Camera Controls (OrbitControls)

OrbitControls enable smooth and interactive camera movement.

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.target.set(0, 1, 0);

✔ Smooth rotation
✔ Zoom in/out support
✔ Better user experience

- 🔄 Animation Loop
function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}
animate();

- 📱 Responsive Rendering

Ensures proper scaling across all screen sizes.

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

### ⚡ Key Learnings
Loading real-world 3D models using GLTFLoader
Understanding model structure and assets inside .glb
Using bounding boxes for scaling and positioning
Properly centering 3D objects in a scene
Enhancing realism using HDR environment maps
Combining ambient + directional lighting effectively
Improving interaction using OrbitControls
Building responsive WebGL applications

### 🏁 Conclusion

This phase helped me understand how to integrate real-world 3D assets into a WebGL scene and make them visually realistic and properly structured.

It is a foundational step toward advanced 3D applications like product configurators, car showrooms, and interactive 3D experiences.