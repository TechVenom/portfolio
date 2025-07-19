import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Text3D } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveElementProps {
  position: [number, number, number];
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const InteractiveElement: React.FC<InteractiveElementProps> = ({ 
  position, 
  mousePosition, 
  scrollY 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Mouse interaction
      const mouseInfluence = 0.5;
      const targetX = position[0] + (mousePosition.x * viewport.width * mouseInfluence) / 10;
      const targetY = position[1] + (mousePosition.y * viewport.height * mouseInfluence) / 10;
      
      // Smooth movement towards target
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.02);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.02);
      
      // Scroll-based movement
      meshRef.current.position.z = position[2] + Math.sin(scrollY * 0.01) * 2;
      
      // Rotation based on mouse and time
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mousePosition.y * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mousePosition.x * 0.5;
      
      // Scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
    }
  });

  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.5, 32, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? '#d946ef' : '#0ea5e9'}
        transparent
        opacity={0.8}
        emissive={hovered ? '#d946ef' : '#0ea5e9'}
        emissiveIntensity={hovered ? 0.3 : 0.1}
        wireframe
      />
    </Sphere>
  );
};

interface FloatingCodeElementProps {
  position: [number, number, number];
  text: string;
  mousePosition: { x: number; y: number };
}

const FloatingCodeElement: React.FC<FloatingCodeElementProps> = ({ 
  position, 
  text, 
  mousePosition 
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      
      // Mouse parallax effect
      groupRef.current.rotation.y = mousePosition.x * 0.1;
      groupRef.current.rotation.x = mousePosition.y * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Box args={[2, 0.3, 0.1]}>
        <meshStandardMaterial
          color="#1e293b"
          transparent
          opacity={0.8}
          emissive="#0ea5e9"
          emissiveIntensity={0.1}
        />
      </Box>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.1}
        height={0.02}
        position={[-0.8, -0.05, 0.06]}
      >
        {text}
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
        />
      </Text3D>
    </group>
  );
};

interface InteractiveElementsProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const InteractiveElements: React.FC<InteractiveElementsProps> = ({
  mousePosition,
  scrollY
}) => {
  const elements: Array<{ position: [number, number, number] }> = [
    { position: [-4, 2, -3] },
    { position: [4, -1, -4] },
    { position: [-2, -3, -2] },
    { position: [3, 3, -5] },
  ];

  const codeElements: Array<{ position: [number, number, number]; text: string }> = [
    { position: [-6, 1, -2], text: "AI.train()" },
    { position: [5, -2, -3], text: "secure.encrypt()" },
    { position: [-3, 4, -4], text: "react.render()" },
    { position: [2, -4, -2], text: "cyber.protect()" },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <InteractiveElement
          key={`element-${index}`}
          position={element.position}
          mousePosition={mousePosition}
          scrollY={scrollY}
        />
      ))}
      
      {codeElements.map((element, index) => (
        <FloatingCodeElement
          key={`code-${index}`}
          position={element.position}
          text={element.text}
          mousePosition={mousePosition}
        />
      ))}
    </>
  );
};

export default InteractiveElements;
