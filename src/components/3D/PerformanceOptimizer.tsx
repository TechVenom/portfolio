import React, { useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  targetFPS?: number;
  minQuality?: number;
  maxQuality?: number;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  targetFPS = 30,
  minQuality = 0.5,
  maxQuality = 1.0
}) => {
  const { gl, camera } = useThree();
  const [quality, setQuality] = useState(maxQuality);
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(performance.now());
  const [fps, setFps] = useState(60);

  useFrame(() => {
    setFrameCount(prev => prev + 1);
    
    // Calculate FPS every 60 frames
    if (frameCount % 60 === 0) {
      const now = performance.now();
      const delta = now - lastTime;
      const currentFPS = (60 * 1000) / delta;
      setFps(currentFPS);
      setLastTime(now);
      
      // Adjust quality based on performance
      if (currentFPS < targetFPS - 5 && quality > minQuality) {
        const newQuality = Math.max(quality - 0.1, minQuality);
        setQuality(newQuality);
        gl.setPixelRatio(Math.min(window.devicePixelRatio, newQuality * 2));
      } else if (currentFPS > targetFPS + 10 && quality < maxQuality) {
        const newQuality = Math.min(quality + 0.1, maxQuality);
        setQuality(newQuality);
        gl.setPixelRatio(Math.min(window.devicePixelRatio, newQuality * 2));
      }
    }
  });

  useEffect(() => {
    // Set initial pixel ratio based on device capabilities
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const initialQuality = isMobile ? 0.7 : 1.0;
    setQuality(initialQuality);
    gl.setPixelRatio(Math.min(window.devicePixelRatio, initialQuality * 2));
    
    // Enable performance optimizations
    // Note: powerPreference and antialias are set during Canvas creation
    
    // Adjust camera settings for performance
    if (camera.type === 'PerspectiveCamera') {
      (camera as THREE.PerspectiveCamera).far = 100;
    }
  }, [gl, camera, quality]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
