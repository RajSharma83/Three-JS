# Three.js Basics - Rotating Cube

## Objective

Create a basic Three.js scene that displays a rotating cube and responds to browser window resizing.

---

## Concepts Covered

### 1. Scene

The scene is the container that holds all 3D objects.
 --> const scene = new THREE.Scene();

---

### 2. Camera

The camera determines what is visible to the user.
 --> const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


#### Parameters

| Parameter      | Description         |
| -------------- | ------------------- |
| 75             | Field of View (FOV) |
| width / height | Aspect Ratio        |
| 0.1            | Near Clipping Plane |
| 1000           | Far Clipping Plane  |

---

### 3. Canvas Selection

Select the existing HTML canvas element.
 --> const canvas = document.querySelector("canvas");

---

### 4. Renderer

The renderer draws the scene onto the canvas.
 --> const renderer = new THREE.WebGLRenderer({canvas});


Set renderer dimensions:
renderer.setSize(window.innerWidth, window.innerHeight);

---

### 5. Geometry

Geometry defines the shape of an object.
 --> const geometry = new THREE.BoxGeometry(1, 1, 1);


Creates a cube with:

* Width = 1
* Height = 1
* Depth = 1

---

### 6. Material

Material defines the appearance of the object.
 --> const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});

Creates a green material.

---

### 7. Mesh

A mesh combines geometry and material.
 --> const cube = new THREE.Mesh( geometry, material);

Add it to the scene:
 --> scene.add(cube);

---

### 8. Camera Position

Move the camera backward so the cube is visible.
 --> camera.position.z = 5;

---

### 9. Responsive Resize

Update renderer and camera when the browser size changes.

```js
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

Why?

* Prevents stretched objects
* Updates viewport size
* Maintains correct perspective

---

### 10. Animation Loop

Runs continuously using the browser's rendering cycle.

```js
function animate() {
  requestAnimationFrame(animate);
  renderer.render( scene,camera);
}

---

### 11. Cube Rotation

Rotate the cube on every frame.
 --> cube.rotation.x += 0.01;
 --> cube.rotation.y += 0.01;


Result:

* Continuous X-axis rotation
* Continuous Y-axis rotation

---

### 12. Rendering

Draw the current scene from the camera's point of view.
 --> renderer.render( scene,camera);

---

## Flow of Execution

1. Create Scene
2. Create Camera
3. Select Canvas
4. Create Renderer
5. Create Geometry
6. Create Material
7. Create Mesh (Cube)
8. Add Cube to Scene
9. Position Camera
10. Start Animation Loop
11. Render Scene Every Frame
12. Handle Window Resize Events

---

## Output

A green cube:

* Rendered inside a canvas
* Continuously rotating
* Responsive to browser resizing

---

## Key Three.js Classes Learned

* `THREE.Scene`
* `THREE.PerspectiveCamera`
* `THREE.WebGLRenderer`
* `THREE.BoxGeometry`
* `THREE.MeshBasicMaterial`
* `THREE.Mesh`

---

## Status

✅ First Three.js Scene Created

✅ First Geometry Rendered

✅ Animation Loop Implemented

✅ Responsive Resizing Added
