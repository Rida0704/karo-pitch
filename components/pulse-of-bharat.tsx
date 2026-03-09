"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Factory, Package, CircuitBoard, Cog } from "lucide-react";

gsap.registerPlugin(MotionPathPlugin);

type SignalRef = HTMLDivElement | null;

const CITIES = {
  indore: new THREE.Vector3(-1.15, -0.15, 0.18),
  jaipur: new THREE.Vector3(-1.45, 0.35, 0.15),
  coimbatore: new THREE.Vector3(-0.15, -1.25, 0.2),
  hub: new THREE.Vector3(1.7, 1.25, 0.6),
};

function IndiaPointCloud() {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pts: number[] = [];
    const cols: number[] = [];

    // Stylized India-like dot field in local plane space.
    for (let y = -1.9; y <= 1.9; y += 0.06) {
      for (let x = -1.7; x <= 1.7; x += 0.06) {
        const top = 1 - Math.abs((y - 0.15) / 1.95);
        const width =
          0.18 +
          1.35 * Math.max(top, 0) -
          0.22 * Math.pow(y + 0.2, 2) +
          0.08 * Math.sin(y * 3.1);

        const taper =
          y > 0.95 ? width * 0.7 :
          y < -1.1 ? width * 0.5 :
          width;

        const cutNW = !(x < -0.95 && y > 1.0);
        const cutNE = !(x > 1.05 && y > 1.0);
        const southTail = !(y < -1.45 && Math.abs(x) > 0.28);
        const inside = Math.abs(x) < taper && cutNW && cutNE && southTail;

        if (inside) {
          pts.push(x, y, Math.sin(x * 2.2 + y * 1.8) * 0.04);

          const c = new THREE.Color("#bfc2c8");
          cols.push(c.r, c.g, c.b);
        }
      }
    }

    return {
      positions: new Float32Array(pts),
      colors: new Float32Array(cols),
    };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.18) * 0.03;
  });

  return (
    <group rotation={[-0.92, -0.05, -0.18]} position={[0, -0.05, -0.1]}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Investor hub */}
      <mesh position={[CITIES.hub.x, CITIES.hub.y, CITIES.hub.z]}>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshBasicMaterial color="#FF5722" />
      </mesh>
      <mesh position={[CITIES.hub.x, CITIES.hub.y, CITIES.hub.z]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshBasicMaterial color="#FF5722" transparent opacity={0.12} />
      </mesh>

      {/* Category icons floating along the rise */}
      <CategoryBadge position={[-1.45, -1.18, 0.25]} icon={<Package className="h-4 w-4" />} label="D2C" />
      <CategoryBadge position={[-1.0, -0.4, 0.28]} icon={<Cog className="h-4 w-4" />} label="MSME" />
      <CategoryBadge position={[-0.25, 0.15, 0.32]} icon={<Factory className="h-4 w-4" />} label="Manufacturing" />
      <CategoryBadge position={[0.6, 0.72, 0.38]} icon={<CircuitBoard className="h-4 w-4" />} label="Tech" />
    </group>
  );
}

function CategoryBadge({
  position,
  icon,
  label,
}: {
  position: [number, number, number];
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Html position={position} center transform distanceFactor={7}>
      <div className="glass flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white whitespace-nowrap">
        <span className="text-[#FFB703]">{icon}</span>
        <span>{label}</span>
      </div>
    </Html>
  );
}

function SceneTilt() {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    target.current.x = THREE.MathUtils.lerp(target.current.x, pointer.x * 0.18, 0.06);
    target.current.y = THREE.MathUtils.lerp(target.current.y, pointer.y * 0.12, 0.06);
    group.current.rotation.y = target.current.x;
    group.current.rotation.x = -0.85 + target.current.y;
  });

  return (
    <group ref={group}>
      <IndiaPointCloud />
    </group>
  );
}

function GsapSignals({
  path1Ref,
  path2Ref,
  path3Ref,
  s1Ref,
  s2Ref,
  s3Ref,
  hubPulseRef,
}: {
  path1Ref: React.RefObject<SVGPathElement | null>;
  path2Ref: React.RefObject<SVGPathElement | null>;
  path3Ref: React.RefObject<SVGPathElement | null>;
  s1Ref: React.RefObject<SignalRef>;
  s2Ref: React.RefObject<SignalRef>;
  s3Ref: React.RefObject<SignalRef>;
  hubPulseRef: React.RefObject<HTMLDivElement | null>;
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const signals = [
        { el: s1Ref.current, path: path1Ref.current, delay: 0 },
        { el: s2Ref.current, path: path2Ref.current, delay: 0.8 },
        { el: s3Ref.current, path: path3Ref.current, delay: 1.6 },
      ];

      signals.forEach(({ el, path, delay }) => {
        if (!el || !path) return;
        gsap.to(el, {
          duration: 3.6,
          repeat: -1,
          ease: "power1.inOut",
          delay,
          motionPath: {
            path,
            align: path,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
          },
        });
      });

      if (hubPulseRef.current) {
        gsap.to(hubPulseRef.current, {
          scale: 1.18,
          opacity: 0.65,
          repeat: -1,
          yoyo: true,
          duration: 1.3,
          ease: "power1.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, [path1Ref, path2Ref, path3Ref, s1Ref, s2Ref, s3Ref, hubPulseRef]);

  return null;
}

export default function PulseOfBharat() {
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const s1Ref = useRef<SignalRef>(null);
  const s2Ref = useRef<SignalRef>(null);
  const s3Ref = useRef<SignalRef>(null);
  const hubPulseRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={canvasWrapRef}
      className="relative h-[760px] w-full overflow-hidden rounded-[28px] bg-[#0F0F11]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,rgba(255,87,34,0.18),transparent_34%)]" />

      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.6], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl, scene }) => {
          scene.background = new THREE.Color("#0F0F11");
          gl.setClearColor("#0F0F11", 1);
        }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[2.5, 2.2, 4]} intensity={2.2} color="#FFB703" />
        <pointLight position={[-2.8, -2.5, 3]} intensity={1.2} color="#FF5722" />
        <SceneTilt />
      </Canvas>

      {/* SVG guide paths for MotionPathPlugin */}
      <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full" viewBox="0 0 1000 760" fill="none">
        <path
          ref={path1Ref}
          d="M290 460 Q 470 280 760 150"
          stroke="rgba(255,87,34,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          ref={path2Ref}
          d="M220 315 Q 440 210 760 150"
          stroke="rgba(255,87,34,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          ref={path3Ref}
          d="M380 560 Q 530 300 760 150"
          stroke="rgba(255,87,34,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Animated signal particles */}
      <div
        ref={s1Ref}
        className="pointer-events-none absolute z-30 h-3 w-3 rounded-full bg-[#FF5722] shadow-[0_0_18px_rgba(255,87,34,0.9)]"
      />
      <div
        ref={s2Ref}
        className="pointer-events-none absolute z-30 h-3 w-3 rounded-full bg-[#FF5722] shadow-[0_0_18px_rgba(255,87,34,0.9)]"
      />
      <div
        ref={s3Ref}
        className="pointer-events-none absolute z-30 h-3 w-3 rounded-full bg-[#FF5722] shadow-[0_0_18px_rgba(255,87,34,0.9)]"
      />

      {/* Investor hub pulse overlay */}
      <div className="pointer-events-none absolute right-[18%] top-[18%] z-30 h-4 w-4 rounded-full bg-[#FF5722] shadow-[0_0_18px_rgba(255,87,34,0.9)]" />
      <div
        ref={hubPulseRef}
        className="pointer-events-none absolute right-[17.2%] top-[17.1%] z-20 h-10 w-10 rounded-full bg-[rgba(255,87,34,0.18)]"
      />

      <GsapSignals
        path1Ref={path1Ref}
        path2Ref={path2Ref}
        path3Ref={path3Ref}
        s1Ref={s1Ref}
        s2Ref={s2Ref}
        s3Ref={s3Ref}
        hubPulseRef={hubPulseRef}
      />

      {/* UI overlay card */}
      <div className="absolute right-6 top-6 z-40">
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-[#FFB703]">
            <CircuitBoard className="h-4 w-4" />
          </div>
          <p className="max-w-[260px] text-sm leading-6 text-white/90">
            Live: Founder from Coimbatore is pitching to 5 Investors.
          </p>
        </div>
      </div>
    </div>
  );
}