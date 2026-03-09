"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.18;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.1}>
      <Sphere ref={ref} args={[1.35, 128, 128]} position={[0.8, 0.2, 0]}>
        <MeshDistortMaterial color="#ff7a1f" roughness={0.14} metalness={0.85} distort={0.38} speed={2.1} emissive="#ff6a00" emissiveIntensity={0.42} />
      </Sphere>
    </Float>
  );
}

function SmallBlob({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2.1} rotationIntensity={0.5} floatIntensity={1.4}>
      <Sphere args={[0.35, 64, 64]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.2} metalness={0.8} />
      </Sphere>
    </Float>
  );
}

export function FloatingOrb() {
  return (
    <div className="absolute inset-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 2]} intensity={2.4} color="#fff2d4" />
        <pointLight position={[-2, -1, 2]} intensity={4} color="#ff6a00" />
        <Orb />
        <SmallBlob position={[-1.6, -0.9, -0.5]} color="#f6c56b" />
        <SmallBlob position={[1.8, 1.15, -0.7]} color="#5d75ff" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
