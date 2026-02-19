import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PipelineCloud() {
  const groupRef = useRef<THREE.Group>(null!);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const tubes = useMemo(() => {
    const result: { curve: THREE.CatmullRomCurve3; color: THREE.Color; radius: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      const points: THREE.Vector3[] = [];
      const startX = (Math.random() - 0.5) * 28;
      const startY = (Math.random() - 0.5) * 18;
      const startZ = (Math.random() - 0.5) * 10 - 5;

      for (let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(
          startX + (Math.random() - 0.5) * 7 + j * 1.8,
          startY + (Math.random() - 0.5) * 5,
          startZ + (Math.random() - 0.5) * 4
        ));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const hue = 0.52 + Math.random() * 0.08;
      const saturation = 0.6 + Math.random() * 0.35;
      const lightness = 0.3 + Math.random() * 0.25;
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      const radius = 0.03 + Math.random() * 0.07;
      const opacity = 0.12 + Math.random() * 0.2;
      result.push({ curve, color, radius, opacity });
    }
    return result;
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.06 + mouse.y * 0.12;
    groupRef.current.rotation.y = Math.cos(t * 0.06) * 0.06 + mouse.x * 0.12;
    groupRef.current.position.x = mouse.x * 0.8;
    groupRef.current.position.y = mouse.y * 0.5;
  });

  return (
    <group ref={groupRef}>
      {tubes.map((tube, i) => (
        <mesh key={i}>
          <tubeGeometry args={[tube.curve, 40, tube.radius, 8, false]} />
          <meshBasicMaterial color={tube.color} transparent opacity={tube.opacity} />
        </mesh>
      ))}
    </group>
  );
}

export default function PipelineBackground() {
  return (
    <div className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent', pointerEvents: 'auto' }}
      >
        <PipelineCloud />
      </Canvas>
    </div>
  );
}
