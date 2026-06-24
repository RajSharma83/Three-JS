# 📘 Phase 4: Lights, Materials, Textures & GUI in Three.js

## 📌 Overview

In this phase, I explored how realism is created in Three.js using **lights, materials, textures, and interactive GUI controls**. These concepts are essential for transforming simple 3D objects into visually rich and dynamic scenes.

I worked on two main parts:

* Lights & Materials
* Textures with Lil GUI

---

## 🧠 What I Learned About Lights & Materials

### 💡 Understanding Lights

Lights are one of the most important parts of a 3D scene. They control visibility, depth, shadows, and overall realism of objects.

---

### 🌤️ Hemisphere Light

Hemisphere light creates soft natural lighting by blending sky and ground colors.

```javascript
new THREE.HemisphereLight(skyColor, groundColor, intensity);
```

* Useful for smooth outdoor lighting without harsh shadows.

---

### ☀️ Directional Light

Directional light simulates sunlight where all rays move in the same direction.

```javascript
new THREE.DirectionalLight(color, intensity);
```

* Produces strong highlights and shadows based on direction.

---

### 💡 Point Light

Point light emits light in all directions from a single position.

```javascript
new THREE.PointLight(color, intensity);
```

* Behaves like a bulb or lamp in real life.

---

### 🔦 Spot Light

Spot light creates a cone-shaped light similar to a flashlight.

```javascript
new THREE.SpotLight(color, intensity);
```

* Used for focused lighting effects.

---

## 🎨 What I Learned About Materials

Materials define how objects react to light and how realistic they appear in the scene.

### ⚪ MeshBasicMaterial

* Does not react to light
* Always visible

### 🟢 MeshLambertMaterial

* Basic light interaction
* No shiny reflections

### 🔵 MeshPhongMaterial

* Supports shininess and highlights
* Good for glossy surfaces

### 🟣 MeshStandardMaterial

* Physically Based Rendering (PBR)
* Uses metalness and roughness
* More realistic output

### 🪟 MeshPhysicalMaterial

* Advanced PBR material
* Supports transparency and transmission
* Used for glass-like effects

```javascript
const material = new THREE.MeshPhysicalMaterial({
  color: "#2194ce",
  metalness: 0.5,
  roughness: 0.1,
  transmission: 5.0,
  transparent: true
});
```

---

## 🎮 Orbit Controls

OrbitControls allow interactive camera movement in the scene.

### Features

* Rotate around objects
* Zoom in and out
* Smooth damping movement
* Auto rotation

```javascript
controls.enableDamping = true;
controls.enableZoom = true;
controls.autoRotate = true;
```

---

## 🧠 What I Learned About Textures

Textures are images applied to geometry to add realism and surface detail.

### 🎨 Color Map

* Defines the base color of the object.

### 🧬 Normal Map

* Adds fine surface details without increasing geometry complexity.

### 🪵 Roughness Map

* Controls how rough or smooth a surface looks.

### 🧊 Displacement Map

* Physically changes geometry based on height data.

```javascript
displacementScale: 0.1
```

* Creates real depth on the object surface.

---

## 🎛️ What I Learned About Lil GUI

Lil GUI is used for real-time control of scene properties without changing code.

### 🎨 Material Controls

* Roughness
* Metalness
* Wireframe
* Displacement Scale

### 📦 Mesh Controls

* Position (X, Y, Z)
* Rotation (X, Y, Z)
* Scale (X, Y, Z)

### 💡 Light Controls

* Ambient Light Intensity
* Directional Light Intensity
* Point Light Intensity

---

## ⚡ Key Learnings

* Lights define visibility and mood of a scene
* Materials control how surfaces react to light
* MeshPhysicalMaterial enables realistic glass effects
* Textures add realistic surface detail
* Displacement maps modify geometry depth
* OrbitControls improve interaction
* GUI enables real-time experimentation

---

## 🏁 Conclusion

This phase helped me understand how realistic 3D scenes are built using lighting, materials, textures, and interactivity in Three.js.

It strengthened my foundation in WebGL rendering and real-time 3D graphics.
