import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring, Text } from '@react-three/drei';
import * as THREE from 'three';

interface SkillSphereProps {
  position: [number, number, number];
  skill: {
    name: string;
    level: number;
    color: string;
  };
  index: number;
}

const SkillSphere: React.FC<SkillSphereProps> = ({ position, skill, index }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (sphereRef.current && ringRef.current) {
      // Floating animation with different phases for each sphere
      const time = state.clock.elapsedTime;
      const phase = index * 0.5;
      
      sphereRef.current.position.y = position[1] + Math.sin(time * 0.8 + phase) * 0.2;
      sphereRef.current.rotation.y = time * 0.3 + phase;
      sphereRef.current.rotation.x = Math.sin(time * 0.5 + phase) * 0.1;
      
      // Ring rotation based on skill level
      ringRef.current.rotation.z = (time * 0.5) + (skill.level / 100) * Math.PI * 2;
      
      // Scale animation on hover
      const targetScale = hovered ? 1.2 : clicked ? 1.1 : 1;
      sphereRef.current.scale.setScalar(
        THREE.MathUtils.lerp(sphereRef.current.scale.x, targetScale, 0.1)
      );
    }
  });

  const handleClick = () => {
    setClicked(!clicked);
    setTimeout(() => setClicked(false), 200);
  };

  return (
    <group position={position}>
      {/* Main Sphere */}
      <Sphere
        ref={sphereRef}
        args={[0.8, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <meshStandardMaterial
          color={skill.color}
          transparent
          opacity={0.7}
          emissive={skill.color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
          wireframe={!hovered}
        />
      </Sphere>

      {/* Progress Ring */}
      <Ring
        ref={ringRef}
        args={[1.2, 1.4, 32]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color={skill.color}
          transparent
          opacity={0.6}
          emissive={skill.color}
          emissiveIntensity={0.2}
        />
      </Ring>

      {/* Skill Level Indicator */}
      <Ring
        args={[1.0, 1.1, 32, 1, 0, (skill.level / 100) * Math.PI * 2]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.8}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Ring>

      {/* Skill Name Text */}
      {hovered && (
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color={skill.color}
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      )}

      {/* Skill Level Text */}
      {hovered && (
        <Text
          position={[0, -1.9, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {skill.level}%
        </Text>
      )}
    </group>
  );
};

interface SkillVisualizationProps {
  skills: Array<{
    name: string;
    level: number;
    color: string;
  }>;
}

const SkillVisualization: React.FC<SkillVisualizationProps> = ({ skills }) => {
  // Arrange skills in a circular pattern
  const radius = 4;
  const positions = skills.map((_, index) => {
    const angle = (index / skills.length) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.sin(index * 0.5) * 1; // Vary height
    return [x, y, z] as [number, number, number];
  });

  return (
    <>
      {skills.map((skill, index) => (
        <SkillSphere
          key={skill.name}
          position={positions[index]}
          skill={skill}
          index={index}
        />
      ))}
    </>
  );
};

export default SkillVisualization;
