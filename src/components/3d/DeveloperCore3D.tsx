import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const DeveloperCore3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 5, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 4, 20);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Central Developer Core Sphere (Icosahedron)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    const coreGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer Orbital Rings
    const createRing = (radius: number, color: number, rx: number, ry: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.03, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.6,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = rx;
      ringMesh.rotation.y = ry;
      return ringMesh;
    };

    const ring1 = createRing(3.5, 0x00f0ff, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(4.3, 0xa855f7, Math.PI / 2.2, -Math.PI / 4);
    const ring3 = createRing(5.0, 0x38bdf8, Math.PI / 4, Math.PI / 2);
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // Orbiting Tech Nodes
    const techItems = ["Java", "Python", "SQL", "JavaScript", "LangChain", "FAISS", "RAG", "GitHub"];
    const techNodesGroup = new THREE.Group();
    coreGroup.add(techNodesGroup);

    const nodeSpheres: THREE.Mesh[] = [];
    const radius = 4.2;

    techItems.forEach((tech, index) => {
      const angle = (index / techItems.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.sin(index * 1.5) * 1.2);

      const nodeGeo = new THREE.SphereGeometry(0.35, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: index % 2 === 0 ? 0x00f0ff : 0xa855f7,
        emissive: index % 2 === 0 ? 0x0284c7 : 0x7e22ce,
        emissiveIntensity: 0.8,
        roughness: 0.2,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      techNodesGroup.add(nodeMesh);
      nodeSpheres.push(nodeMesh);
    });

    // Background Particle Sparkles
    const particlesCount = 200;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
      particlePositions[i + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous core rotation
      coreMesh.rotation.y = elapsedTime * 0.3;
      coreMesh.rotation.x = elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.25;
      ring3.rotation.z = elapsedTime * 0.15;

      techNodesGroup.rotation.y = elapsedTime * 0.35;

      // Pulse inner glow
      innerMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.08);

      // Smooth mouse parallax
      coreGroup.rotation.x += (mouseY * 0.3 - coreGroup.rotation.x) * 0.05;
      coreGroup.rotation.y += (mouseX * 0.3 - coreGroup.rotation.y) * 0.05;

      particleSystem.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] max-h-[480px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      {/* Outer Glow Halo */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
    </div>
  );
};
