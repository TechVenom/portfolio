import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ContactIcon3DProps {
  position: [number, number, number];
  icon: 'email' | 'phone' | 'location';
  color: string;
  index: number;
}

const ContactIcon3D: React.FC<ContactIcon3DProps> = ({ position, icon, color, index }) => {
  const groupRef = useRef<THREE.Group>(null);
  const iconRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current && iconRef.current) {
      const time = state.clock.elapsedTime;
      const phase = index * 0.7;
      
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(time * 0.8 + phase) * 0.2;
      
      // Rotation animation
      iconRef.current.rotation.y = time * 0.5 + phase;
      iconRef.current.rotation.x = Math.sin(time * 0.3 + phase) * 0.2;
    }
  });

  const renderIcon = () => {
    switch (icon) {
      case 'email':
        return (
          <Box args={[1, 0.6, 0.1]}>
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Box>
        );
      case 'phone':
        return (
          <Box args={[0.4, 1, 0.1]}>
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Box>
        );
      case 'location':
        return (
          <Sphere args={[0.5, 16, 16]}>
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Sphere>
        );
      default:
        return null;
    }
  };

  return (
    <group ref={groupRef} position={position}>
      <group ref={iconRef}>
        {renderIcon()}
      </group>
      
      {/* Orbital Ring */}
      <Torus
        args={[1.2, 0.05, 8, 32]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Torus>
    </group>
  );
};

interface MessageBubble3DProps {
  position: [number, number, number];
  message: string;
  index: number;
}

const MessageBubble3D: React.FC<MessageBubble3DProps> = ({ position, message, index }) => {
  const bubbleRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bubbleRef.current) {
      const time = state.clock.elapsedTime;
      const phase = index * 1.2;
      
      // Floating animation
      bubbleRef.current.position.y = position[1] + Math.sin(time * 0.6 + phase) * 0.15;
      bubbleRef.current.rotation.y = Math.sin(time * 0.4 + phase) * 0.1;
    }
  });

  return (
    <group ref={bubbleRef} position={position}>
      {/* Bubble Background */}
      <Sphere args={[1, 16, 16]}>
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.3}
          emissive="#0ea5e9"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Message Text */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.5}
        textAlign="center"
      >
        {message}
      </Text>
    </group>
  );
};

interface NetworkNode3DProps {
  position: [number, number, number];
  connections: [number, number, number][];
  index: number;
}

const NetworkNode3D: React.FC<NetworkNode3DProps> = ({ position, connections, index }) => {
  const nodeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (nodeRef.current && groupRef.current) {
      const time = state.clock.elapsedTime;
      const phase = index * 0.5;
      
      // Pulsing animation
      const scale = 1 + Math.sin(time * 2 + phase) * 0.1;
      nodeRef.current.scale.setScalar(scale);
      
      // Rotation
      groupRef.current.rotation.y = time * 0.2 + phase;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main Node */}
      <Sphere ref={nodeRef} args={[0.3, 16, 16]}>
        <meshStandardMaterial
          color="#d946ef"
          emissive="#d946ef"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Connection Lines */}
      {connections.map((connection, connIndex) => {
        const direction = new THREE.Vector3(...connection).sub(new THREE.Vector3(...position));
        const length = direction.length();
        const midPoint = new THREE.Vector3(...position).add(direction.multiplyScalar(0.5));
        
        return (
          <Box
            key={connIndex}
            args={[0.02, length, 0.02]}
            position={[midPoint.x - position[0], midPoint.y - position[1], midPoint.z - position[2]]}
            lookAt={connection}
          >
            <meshStandardMaterial
              color="#06b6d4"
              transparent
              opacity={0.6}
              emissive="#06b6d4"
              emissiveIntensity={0.2}
            />
          </Box>
        );
      })}
    </group>
  );
};

const ContactElements3D: React.FC = () => {
  const contactIcons: Array<{
    position: [number, number, number];
    icon: 'email' | 'phone' | 'location';
    color: string;
  }> = [
    { position: [-3, 1, 0], icon: 'email', color: '#0ea5e9' },
    { position: [0, 2, -1], icon: 'phone', color: '#10b981' },
    { position: [3, 0, 0], icon: 'location', color: '#d946ef' },
  ];

  const messageBubbles: Array<{
    position: [number, number, number];
    message: string;
  }> = [
    { position: [-2, -1, 1], message: "Let's connect!" },
    { position: [2, -2, -1], message: "Ready to collaborate" },
    { position: [0, 3, 1], message: "Available for projects" },
  ];

  const networkNodes: Array<{
    position: [number, number, number];
    connections: [number, number, number][];
  }> = [
    {
      position: [-4, 0, -2],
      connections: [
        [0, 1, 0],
        [4, -1, 1]
      ]
    },
    {
      position: [4, -1, 1],
      connections: [
        [-4, 0, -2],
        [0, 2, -1]
      ]
    },
    {
      position: [0, 2, -1],
      connections: [
        [4, -1, 1],
        [-2, -1, 1]
      ]
    },
  ];

  return (
    <>
      {/* Contact Icons */}
      {contactIcons.map((icon, index) => (
        <ContactIcon3D
          key={`icon-${index}`}
          position={icon.position}
          icon={icon.icon}
          color={icon.color}
          index={index}
        />
      ))}
      
      {/* Message Bubbles */}
      {messageBubbles.map((bubble, index) => (
        <MessageBubble3D
          key={`bubble-${index}`}
          position={bubble.position}
          message={bubble.message}
          index={index}
        />
      ))}
      
      {/* Network Nodes */}
      {networkNodes.map((node, index) => (
        <NetworkNode3D
          key={`node-${index}`}
          position={node.position}
          connections={node.connections}
          index={index}
        />
      ))}
    </>
  );
};

export default ContactElements3D;
