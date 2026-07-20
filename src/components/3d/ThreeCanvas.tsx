'use client';

import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';

// Dynamically import the Canvas and R3F components to avoid SSR compilation errors
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const TripodLogo3D = dynamic(() => import('./TripodLogo3D'), { ssr: false });

// Fallback static SVG representation of the logo
function FallbackLogo() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <svg
        className="w-40 h-40 md:w-52 md:h-52 text-primary animate-float"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tripod Creative Logo Vector Fallback"
      >
        <circle cx="100" cy="100" r="50" stroke="#ff7e00" strokeWidth="6" />
        <line x1="100" y1="100" x2="65" y2="160" stroke="#fdd000" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="100" x2="135" y2="160" stroke="#fdd000" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="100" x2="100" y2="40" stroke="#fdd000" strokeWidth="4" strokeLinecap="round" />
        <circle cx="65" cy="160" r="5" fill="#ffb688" />
        <circle cx="135" cy="160" r="5" fill="#ffb688" />
        <circle cx="100" cy="40" r="5" fill="#ffb688" />
      </svg>
    </div>
  );
}

export function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const canUseWebgl =
    mounted && typeof document !== 'undefined'
      ? Boolean(
          document.createElement('canvas').getContext('webgl') ||
            document.createElement('canvas').getContext('experimental-webgl'),
        )
      : false;

  // If not mounted yet (SSR) or user prefers reduced motion or is on mobile,
  // show the fallback vector graphics immediately.
  if (!mounted || shouldReduceMotion || isMobile || !canUseWebgl) {
    return <FallbackLogo />;
  }

  return (
    <div className="w-full h-[320px] md:h-[420px] relative">
      <Suspense fallback={<FallbackLogo />}>
        <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }} className="w-full h-full">
          <ambientLight intensity={1.2} />
          <directionalLight position={[4, 4, 4]} intensity={2.0} castShadow />
          <pointLight position={[-4, -4, -4]} intensity={1.0} color="#ffb688" />
          <TripodLogo3D />
        </Canvas>
      </Suspense>
    </div>
  );
}
