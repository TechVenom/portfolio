import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

interface Scene3DProps {
  className?: string;
  enableControls?: boolean;
}

const Scene3D: React.FC<Scene3DProps> = ({ className = '', enableControls = false }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#0ea5e9" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />
        <directionalLight position={[0, 5, 5]} intensity={0.4} color="#06b6d4" />
        
        <Suspense fallback={null}>
          {/* Particle Field */}
          <ParticleField count={3000} />
          
          {/* Floating Geometric Shapes */}
          <FloatingGeometry />
        </Suspense>
        
        {/* Optional Controls for debugging */}
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene3D;
