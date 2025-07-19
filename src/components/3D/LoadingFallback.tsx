import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface LoadingFallbackProps {
  message?: string;
}

const LoadingFallback: React.FC<LoadingFallbackProps> = ({
  message = "Loading..."
}) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Loading Sphere */}
      <Sphere ref={sphereRef} args={[1, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.6}
          wireframe
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Loading Text */}
      <Text
        position={[0, -2, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {message}
      </Text>

      {/* Ambient Light for visibility */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
    </group>
  );
};

export default LoadingFallback;
