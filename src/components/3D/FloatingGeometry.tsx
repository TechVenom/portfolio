import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  type: 'sphere' | 'box' | 'octahedron' | 'torus';
  scale?: number;
  speed?: number;
  color?: string;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ 
  position, 
  type, 
  scale = 1, 
  speed = 1,
  color = '#0ea5e9'
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      
      // Rotation animation
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.rotation.z += 0.005 * speed;
    }
  });

  const renderShape = () => {
    const commonProps = {
      ref: meshRef,
      scale: scale,
      position: position,
    };

    switch (type) {
      case 'sphere':
        return <Sphere {...commonProps} args={[1, 32, 32]} />;
      case 'box':
        return <Box {...commonProps} args={[1, 1, 1]} />;
      case 'octahedron':
        return <Octahedron {...commonProps} args={[1]} />;
      case 'torus':
        return <Torus {...commonProps} args={[1, 0.4, 16, 32]} />;
      default:
        return <Sphere {...commonProps} args={[1, 32, 32]} />;
    }
  };

  return (
    <group>
      {renderShape()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        wireframe
        emissive={color}
        emissiveIntensity={0.2}
      />
    </group>
  );
};

const FloatingGeometry: React.FC = () => {
  const shapes: Array<{
    position: [number, number, number];
    type: 'sphere' | 'box' | 'octahedron' | 'torus';
    scale: number;
    speed: number;
    color: string;
  }> = [
    { position: [-8, 2, -5], type: 'sphere', scale: 0.8, speed: 0.8, color: '#0ea5e9' },
    { position: [6, -1, -8], type: 'box', scale: 0.6, speed: 1.2, color: '#d946ef' },
    { position: [-4, -3, -6], type: 'octahedron', scale: 0.7, speed: 0.9, color: '#06b6d4' },
    { position: [8, 3, -4], type: 'torus', scale: 0.5, speed: 1.1, color: '#8b5cf6' },
    { position: [2, 4, -7], type: 'sphere', scale: 0.4, speed: 1.3, color: '#0ea5e9' },
    { position: [-6, 1, -9], type: 'box', scale: 0.5, speed: 0.7, color: '#d946ef' },
    { position: [4, -2, -5], type: 'octahedron', scale: 0.6, speed: 1.0, color: '#06b6d4' },
    { position: [-2, 5, -6], type: 'torus', scale: 0.3, speed: 1.4, color: '#8b5cf6' },
  ];

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={[...shape.position] as [number, number, number]}
          type={shape.type}
          scale={shape.scale}
          speed={shape.speed}
          color={shape.color}
        />
      ))}
    </>
  );
};

export default FloatingGeometry;
