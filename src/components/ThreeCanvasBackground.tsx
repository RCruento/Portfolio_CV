"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeCanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 3D Arcade Floating Wireframe Geometries
    const group = new THREE.Group();

    // Red Wireframe Torus
    const torusGeo = new THREE.TorusGeometry(6, 1.2, 16, 60);
    const torusEdges = new THREE.EdgesGeometry(torusGeo);
    const torusMat = new THREE.LineBasicMaterial({
      color: 0xe11d48,
      transparent: true,
      opacity: 0.25,
    });
    const torus = new THREE.LineSegments(torusEdges, torusMat);
    torus.position.set(-16, 8, -10);
    group.add(torus);

    // Blue Wireframe Cube
    const cubeGeo = new THREE.BoxGeometry(7, 7, 7);
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo);
    const cubeMat = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.25,
    });
    const cube = new THREE.LineSegments(cubeEdges, cubeMat);
    cube.position.set(16, -6, -12);
    group.add(cube);

    // Yellow Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(8, 1);
    const icoEdges = new THREE.EdgesGeometry(icoGeo);
    const icoMat = new THREE.LineBasicMaterial({
      color: 0xeab308,
      transparent: true,
      opacity: 0.2,
    });
    const ico = new THREE.LineSegments(icoEdges, icoMat);
    ico.position.set(0, -2, -18);
    group.add(ico);

    scene.add(group);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.005;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.005;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationId: number;
    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      torus.rotation.x = elapsed * 0.2 + targetY;
      torus.rotation.y = elapsed * 0.3 + targetX;

      cube.rotation.x = -elapsed * 0.25;
      cube.rotation.y = elapsed * 0.15;

      ico.rotation.y = elapsed * 0.1 + targetX * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      torusGeo.dispose();
      torusEdges.dispose();
      torusMat.dispose();
      cubeGeo.dispose();
      cubeEdges.dispose();
      cubeMat.dispose();
      icoGeo.dispose();
      icoEdges.dispose();
      icoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60 dark:opacity-40"
      aria-hidden="true"
    />
  );
}
