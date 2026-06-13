📘 Phase 3: Geometries in Three.js
📌 Overview

In this phase, I explored Geometries in Three.js, which define the shape and structure of 3D objects. Geometries are the core building blocks for creating meshes, and they determine how an object looks in a 3D scene.

🧠 What I Learned About Geometries
📦 Understanding Geometry

A geometry in Three.js represents the vertices, edges, and faces that form a 3D object. When combined with a material, it becomes a visible mesh.

const mesh = new THREE.Mesh(geometry, material);
🧩 Built-in Geometries I Explored
🔵 1. Sphere Geometry

Creates a smooth spherical shape.

const geometry = new THREE.SphereGeometry(15, 32, 16);
🪐 Used for planets, balls, and round objects
📏 Defined using radius and segment detail
🟢 2. Capsule Geometry

Creates a capsule-like shape (cylinder with rounded ends).

const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
🎮 Useful for character-like placeholders
🔘 Smooth rounded structure
🟡 3. Torus Geometry

Creates a donut-shaped object.

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
🍩 Defined by radius and tube thickness
🔄 Good for practicing circular structures
🔴 4. Torus Knot Geometry

Creates a complex knotted structure based on mathematical curves.

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
🧠 More advanced and visually complex
📐 Demonstrates mathematical geometry generation
📚 Key Learning About Geometries
🧱 Geometries define the shape of 3D objects
🔺 They are made of vertices and faces
🎯 Different geometries serve different visual and structural purposes
📊 Geometry detail depends on segment values
⚡ Higher segments = smoother shapes but more performance cost
⚠️ Important Note

Three.js provides many more geometries that can be explored depending on project needs and learning goals, such as:

📦 BoxGeometry
📄 PlaneGeometry
⚪ CircleGeometry
🔺 ConeGeometry
🧊 CylinderGeometry
💍 RingGeometry
🔷 DodecahedronGeometry
🔶 IcosahedronGeometry
🔺 OctahedronGeometry
🔻 TetrahedronGeometry
🧵 TubeGeometry
✏️ ShapeGeometry
📦 ExtrudeGeometry

Each geometry helps understand different ways of constructing 3D shapes in WebGL.

🏁 Conclusion

This phase helped me understand how different geometries work in Three.js and how they form the foundation of all 3D objects in a scene.