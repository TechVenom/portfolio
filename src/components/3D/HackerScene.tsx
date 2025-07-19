import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Text, 
  Box, 
  Sphere, 
  Cylinder,
  useTexture,
  Environment,
  ContactShadows,
  Float,
  Html
} from '@react-three/drei';
import * as THREE from 'three';

// Laptop Component
const Laptop = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
  const laptopRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={laptopRef} position={position}>
      {/* Laptop Base */}
      <Box args={[3, 0.2, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Laptop Screen */}
      <group position={[0, 1, -0.9]} rotation={[-0.2, 0, 0]}>
        <Box args={[2.8, 1.8, 0.1]} ref={screenRef}>
          <meshStandardMaterial color="#0a0a0a" />
        </Box>
        
        {/* Screen Content */}
        <Box args={[2.6, 1.6, 0.01]} position={[0, 0, 0.06]}>
          <meshStandardMaterial 
            color="#000000" 
            emissive="#00ff00" 
            emissiveIntensity={0.3}
          />
        </Box>
        
        {/* Code Lines */}
        {[...Array(8)].map((_, i) => (
          <Box 
            key={i}
            args={[Math.random() * 2 + 0.5, 0.05, 0.01]} 
            position={[
              (Math.random() - 0.5) * 2, 
              0.6 - i * 0.15, 
              0.07
            ]}
          >
            <meshStandardMaterial 
              color="#00ff00" 
              emissive="#00ff00" 
              emissiveIntensity={0.5}
            />
          </Box>
        ))}
      </group>
      
      {/* Keyboard */}
      <Box args={[2.5, 0.05, 1.5]} position={[0, 0.125, 0.2]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Box>
      
      {/* Trackpad */}
      <Box args={[0.8, 0.01, 0.6]} position={[0, 0.15, 0.6]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </Box>
    </group>
  );
};

// Hacker Figure Component
const HackerFigure = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
  const figureRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (figureRef.current) {
      // Subtle breathing animation
      figureRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
    
    if (headRef.current) {
      // Head movement
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    
    // Typing animation
    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.x = -0.5 + Math.sin(state.clock.elapsedTime * 8) * 0.1;
      rightArmRef.current.rotation.x = -0.5 + Math.sin(state.clock.elapsedTime * 8 + Math.PI) * 0.1;
    }
  });

  return (
    <group ref={figureRef} position={position}>
      {/* Torso */}
      <Cylinder args={[0.4, 0.5, 1.2]} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Cylinder>
      
      {/* Head */}
      <Sphere args={[0.25]} position={[0, 1.5, 0]} ref={headRef}>
        <meshStandardMaterial color="#d4a574" />
      </Sphere>
      
      {/* Hood */}
      <Sphere args={[0.35]} position={[0, 1.5, 0]}>
        <meshStandardMaterial 
          color="#0a0a0a" 
          transparent 
          opacity={0.8}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Eyes (glowing) */}
      <Sphere args={[0.03]} position={[-0.08, 1.55, 0.2]}>
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={0.8}
        />
      </Sphere>
      <Sphere args={[0.03]} position={[0.08, 1.55, 0.2]}>
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={0.8}
        />
      </Sphere>
      
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.6, 1, 0]}>
        <Cylinder args={[0.1, 0.12, 0.8]} rotation={[0, 0, 0.3]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Cylinder>
        {/* Hand */}
        <Sphere args={[0.08]} position={[-0.2, -0.5, 0.3]}>
          <meshStandardMaterial color="#d4a574" />
        </Sphere>
      </group>
      
      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.6, 1, 0]}>
        <Cylinder args={[0.1, 0.12, 0.8]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Cylinder>
        {/* Hand */}
        <Sphere args={[0.08]} position={[0.2, -0.5, 0.3]}>
          <meshStandardMaterial color="#d4a574" />
        </Sphere>
      </group>
      
      {/* Legs */}
      <Cylinder args={[0.15, 0.12, 1]} position={[-0.2, -0.5, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Cylinder>
      <Cylinder args={[0.15, 0.12, 1]} position={[0.2, -0.5, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Cylinder>
    </group>
  );
};

// Floating Code Particles
const CodeParticles = () => {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        Math.random() * 5,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      text: ['01', '10', '{}', '<>', '/>', '&&', '||', '=='][Math.floor(Math.random() * 8)],
      speed: Math.random() * 0.02 + 0.01
    }));
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        child.position.y += particles[i].speed;
        if (child.position.y > 6) {
          child.position.y = -2;
        }
        child.rotation.y = state.clock.elapsedTime * 0.5;
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={particle.position}
            fontSize={0.2}
            color="#00ff00"
            anchorX="center"
            anchorY="middle"
          >
            {particle.text}
          </Text>
        </Float>
      ))}
    </group>
  );
};

// Main Scene Component
const HackerScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 60 }}
        shadows
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-5, 2, 5]} intensity={0.3} color="#ff0080" />
        <spotLight
          position={[0, 8, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#00ff00"
          castShadow
        />
        
        {/* Environment */}
        <Environment preset="night" />
        
        {/* Main Scene */}
        <group position={[0, -1, 0]}>
          <HackerFigure position={[0, 0, 0]} />
          <Laptop position={[0, 0.8, 1]} />
          <CodeParticles />
          
          {/* Floor */}
          <Box args={[20, 0.1, 20]} position={[0, -1.5, 0]}>
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.8} 
              roughness={0.2}
            />
          </Box>
          
          {/* Contact Shadows */}
          <ContactShadows
            position={[0, -1.45, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
          />
        </group>
        
        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default HackerScene;
