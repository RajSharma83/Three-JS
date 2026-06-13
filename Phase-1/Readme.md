# 🚀 Three.js Learning Journey - Phase 1

## 📖 Overview

This project is the first step in learning **Three.js**, a powerful JavaScript library used for creating 3D graphics in the browser using WebGL.

In this phase, we learn how to:

* Create a 3D scene
* Add a camera
* Create a renderer
* Build a basic 3D cube
* Apply material and color
* Render objects on the screen
* Add animation
* Handle browser resizing

---

## 🎯 What This Project Does

The application displays a **green rotating cube** in a 3D scene.

The cube continuously rotates on both the X and Y axes, creating a simple animation loop.


---

## 🛠 Concepts Covered

### 1. Scene

A scene is the container that holds all 3D objects, lights, and cameras.

```javascript
const scene = new THREE.Scene();
```

---

### 2. Camera

The camera determines what part of the 3D world is visible.

```javascript
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
```

#### Parameters

| Parameter    | Description         |
| ------------ | ------------------- |
| 75           | Field of View (FOV) |
| Aspect Ratio | Width ÷ Height      |
| 0.1          | Near clipping plane |
| 1000         | Far clipping plane  |

---

### 3. Renderer

The renderer draws the scene onto the HTML canvas.

```javascript
const renderer = new THREE.WebGLRenderer({ canvas });
```

Set the renderer size:

```javascript
renderer.setSize(window.innerWidth, window.innerHeight);
```

---

### 4. Geometry

Geometry defines the shape of an object.

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
```

This creates a cube with:

* Width = 1
* Height = 1
* Depth = 1

---

### 5. Material

Material defines how the object looks.

```javascript
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
```

This gives the cube a green color.

---

### 6. Mesh

A mesh combines geometry and material into a visible object.

```javascript
const cube = new THREE.Mesh(
  geometry,
  material
);
```

Add it to the scene:

```javascript
scene.add(cube);
```

---

### 7. Camera Position

Move the camera backward so the cube becomes visible.

```javascript
camera.position.z = 5;
```

---

### 8. Animation Loop

The animation loop updates every frame.

```javascript
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
```

Start animation:

```javascript
animate();
```

---

### 9. Responsive Canvas

Update the renderer and camera when the browser window changes size.

```javascript
window.addEventListener('resize', () => {

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  camera.aspect =
    window.innerWidth /
    window.innerHeight;

  camera.updateProjectionMatrix();
});
```

---

## ▶️ Running the Project

### Install Three.js

```bash
npm install three
```

### Start Development Server

Using Vite:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 📸 Expected Output

You should see:

✅ A green cube

✅ Black background

✅ Continuous rotation animation

✅ Responsive resizing

---

## 🧠 Key Learnings

After completing this phase, you should understand:

* Scene creation
* Camera setup
* Renderer configuration
* Geometry creation
* Materials
* Meshes
* Basic animation loops
* Window resize handling

These concepts form the foundation of all Three.js applications.

---


## 📚 Resources

* Three.js Documentation: https://threejs.org/docs/
* Three.js Examples: https://threejs.org/examples/
* Three.js Official Website: https://threejs.org/

---

### Phase 1 Status

✅ Scene Created

✅ Camera Added

✅ Renderer Configured

✅ Cube Created

✅ Animation Working

✅ Responsive Resize Handling

**Learning Progress: Phase 1 Complete 🎉**
