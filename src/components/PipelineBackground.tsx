import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PipelineCloud() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const tubes = useMemo(() => {
    const result: { curve: THREE.CatmullRomCurve3; color: THREE.Color; radius: number; opacity: number }[] = [];
    for (let i = 0; i < 50; i++) {
      const points: THREE.Vector3[] = [];
      const startX = (Math.random() - 0.5) * 24;
      const startY = (Math.random() - 0.5) * 16;
      const startZ = (Math.random() - 0.5) * 12 - 4;

      for (let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(
          startX + (Math.random() - 0.5) * 6 + j * 1.5,
          startY + (Math.random() - 0.5) * 4,
          startZ + (Math.random() - 0.5) * 4
        ));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      // Use brighter, more saturated blues/cyans
      const hue = 0.53 + Math.random() * 0.07;
      const saturation = 0.5 + Math.random() * 0.4;
      const lightness = 0.25 + Math.random() * 0.2;
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      const radius = 0.03 + Math.random() * 0.06;
      const opacity = 0.15 + Math.random() * 0.25;
      result.push({ curve, color, radius, opacity });
    }
    return result;
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05 + mouseRef.current.y * 0.1;
    groupRef.current.rotation.y = Math.cos(t * 0.08) * 0.05 + mouseRef.current.x * 0.1;
    groupRef.current.position.x = mouseRef.current.x * 0.6;
    groupRef.current.position.y = mouseRef.current.y * 0.4;
  });

  return (
    <group ref={groupRef}>
      {tubes.map((tube, i) => (
        <mesh key={i}>
          <tubeGeometry args={[tube.curve, 32, tube.radius, 6, false]} />
          <meshBasicMaterial color={tube.color} transparent opacity={tube.opacity} />
        </mesh>
      ))}
      {tubes.map((tube, i) => {
        const points = tube.curve.getPoints(4);
        return points.map((p, j) => (
          <mesh key={`n-${i}-${j}`} position={p}>
            <sphereGeometry args={[0.04 + Math.random() * 0.03, 8, 8]} />
            <meshBasicMaterial color={tube.color} transparent opacity={0.2} />
          </mesh>
        ));
      })}
    </group>
  );
}

export default function PipelineBackground() {
  return (
    <div className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent', pointerEvents: 'auto' }}
        onPointerMove={() => {}}
      >
        <PipelineCloud />
      </Canvas>
    </div>
  );
}
