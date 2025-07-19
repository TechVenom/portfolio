import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Plane, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  position: [number, number, number];
  project: {
    title: string;
    description: string;
    color: string;
    technologies: string[];
  };
  index: number;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ position, project, index }) => {
  const groupRef = useRef<THREE.Group>(null);
  const cardRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (groupRef.current && cardRef.current) {
      const time = state.clock.elapsedTime;
      const phase = index * 0.8;
      
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(time * 0.6 + phase) * 0.1;
      
      // Rotation animation
      if (!hovered) {
        groupRef.current.rotation.y = Math.sin(time * 0.3 + phase) * 0.1;
        groupRef.current.rotation.x = Math.sin(time * 0.4 + phase) * 0.05;
      }
      
      // Hover effects
      if (hovered) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0.2, 0.1);
        groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, position[2] + 0.5, 0.1);
      } else {
        groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, position[2], 0.1);
      }
      
      // Scale animation
      const targetScale = clicked ? 1.1 : hovered ? 1.05 : 1;
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1)
      );
    }
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Main Card */}
      <Box ref={cardRef} args={[3, 4, 0.1]}>
        <meshStandardMaterial
          color={hovered ? project.color : '#1e293b'}
          transparent
          opacity={0.9}
          emissive={project.color}
          emissiveIntensity={hovered ? 0.2 : 0.05}
        />
      </Box>

      {/* Card Border */}
      <Box args={[3.1, 4.1, 0.05]} position={[0, 0, -0.08]}>
        <meshStandardMaterial
          color={project.color}
          transparent
          opacity={0.6}
          emissive={project.color}
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Project Title */}
      <Text
        position={[0, 1.5, 0.06]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        {project.title}
      </Text>

      {/* Project Description */}
      <Text
        position={[0, 0.5, 0.06]}
        fontSize={0.15}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
        textAlign="center"
      >
        {project.description}
      </Text>

      {/* Technology Tags */}
      {project.technologies.slice(0, 3).map((tech, techIndex) => (
        <group key={tech} position={[-1 + techIndex * 1, -1.2, 0.06]}>
          <Box args={[0.8, 0.3, 0.02]}>
            <meshStandardMaterial
              color={project.color}
              transparent
              opacity={0.7}
              emissive={project.color}
              emissiveIntensity={0.1}
            />
          </Box>
          <Text
            position={[0, 0, 0.02]}
            fontSize={0.1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {tech}
          </Text>
        </group>
      ))}

      {/* Hover Glow Effect */}
      {hovered && (
        <Plane args={[3.5, 4.5]} position={[0, 0, -0.1]}>
          <meshStandardMaterial
            color={project.color}
            transparent
            opacity={0.1}
            emissive={project.color}
            emissiveIntensity={0.5}
          />
        </Plane>
      )}
    </group>
  );
};

interface ProjectShowcase3DProps {
  projects: Array<{
    title: string;
    description: string;
    color: string;
    technologies: string[];
  }>;
}

const ProjectShowcase3D: React.FC<ProjectShowcase3DProps> = ({ projects }) => {
  // Arrange projects in a staggered layout
  const positions: [number, number, number][] = [
    [-4, 1, 0],
    [0, 0, -1],
    [4, -1, 0],
  ];

  return (
    <>
      {projects.slice(0, 3).map((project, index) => (
        <ProjectCard3D
          key={project.title}
          position={positions[index]}
          project={project}
          index={index}
        />
      ))}
    </>
  );
};

export default ProjectShowcase3D;
