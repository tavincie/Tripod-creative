'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function TripodLogo3D() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.12;
      // Soft continuous rotation
      groupRef.current.rotation.y = t * 0.25;
    }
    if (ringRef.current) {
      // Wobbling motion to make the logo look dynamic
      ringRef.current.rotation.z = Math.sin(t) * 0.15;
      ringRef.current.rotation.x = Math.cos(t * 0.6) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Ring */}
      <mesh ref={ringRef} castShadow receiveShadow>
        <torusGeometry args={[1.1, 0.07, 16, 100]} />
        <meshPhongMaterial
          color="#ff7e00"
          emissive="#330e00"
          specular="#ffffff"
          shininess={120}
        />
      </mesh>

      {/* Leg 1 */}
      <mesh position={[0, -0.9, 0.5]} rotation={[0.4, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 1.8, 12]} />
        <meshPhongMaterial color="#fdd000" specular="#ffffff" shininess={90} />
      </mesh>

      {/* Leg 2 - Offset 120 deg */}
      <mesh position={[-0.43, -0.9, -0.25]} rotation={[-0.2, -0.35, -0.35]}>
        <cylinderGeometry args={[0.035, 0.035, 1.8, 12]} />
        <meshPhongMaterial color="#fdd000" specular="#ffffff" shininess={90} />
      </mesh>

      {/* Leg 3 - Offset 240 deg */}
      <mesh position={[0.43, -0.9, -0.25]} rotation={[-0.2, 0.35, 0.35]}>
        <cylinderGeometry args={[0.035, 0.035, 1.8, 12]} />
        <meshPhongMaterial color="#fdd000" specular="#ffffff" shininess={90} />
      </mesh>

      {/* Small design nodes / floating elements surrounding */}
      <mesh position={[-1.6, 0.6, 0.3]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshPhongMaterial color="#ffb688" emissive="#220a00" />
      </mesh>
      <mesh position={[1.6, -0.4, -0.5]}>
        <boxGeometry args={[0.07, 0.07, 0.07]} />
        <meshPhongMaterial color="#fdd000" emissive="#221100" />
      </mesh>
    </group>
  );
}
