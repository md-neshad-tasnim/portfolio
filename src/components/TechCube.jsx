// src/components/TechCube.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const Cube = () => {
  const cubeRef = useRef();

  // Auto rotation with GSAP
  useEffect(() => {
    gsap.to(cubeRef.current.rotation, {
      y: Math.PI * 2,
      repeat: -1,
      duration: 20,
      ease: 'none',
    });
  }, []);

  // Keep rotating (also allows interactivity with OrbitControls)
  useFrame(() => {
    cubeRef.current.rotation.y += 0.002;
  });

  const labels = [
    { text: 'React', position: [0, 0, 1.01] },
    { text: 'Node', position: [0, 0, -1.01], rotation: [0, Math.PI, 0] },
    { text: 'Express', position: [1.01, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    { text: 'MongoDB', position: [-1.01, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { text: 'JavaScript', position: [0, 1.01, 0], rotation: [-Math.PI / 2, 0, 0] },
    { text: 'TailwindCSS', position: [0, -1.01, 0], rotation: [Math.PI / 2, 0, 0] },
  ];

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00FFFF" />

      {labels.map(({ text, position, rotation }, i) => (
        <Text
          key={i}
          fontSize={0.3}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          position={position}
          rotation={rotation}
        >
          {text}
        </Text>
      ))}
    </mesh>
  );
};

const TechCubeCanvas = () => {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 50 }}
      style={{ height: '400px', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <Cube />
    </Canvas>
  );
};

export default TechCubeCanvas;
