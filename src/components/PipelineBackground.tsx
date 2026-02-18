import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function PipelineCloud() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const tubes = useMemo(() => {
    const result: { curve: THREE.CatmullRomCurve3; color: THREE.Color }[] = [];
    for (let i = 0; i < 40; i++) {
      const points: THREE.Vector3[] = [];
      const startX = (Math.random() - 0.5) * 20;
      const startY = (Math.random() - 0.5) * 12;
      const startZ = (Math.random() - 0.5) * 10 - 5;
      
      for (let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(
          startX + (Math.random() - 0.5) * 6 + j * 1.5,
          startY + (Math.random() - 0.5) * 4,
          startZ + (Math.random() - 0.5) * 4
        ));
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      const hue = 0.55 + Math.random() * 0.05;
      const saturation = 0.15 + Math.random() * 0.2;
      const lightness = 0.12 + Math.random() * 0.08;
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      result.push({ curve, color });
    }
    return result;
  }, []);

  const handlePointerMove = useCallback((e: any) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05 + mouseRef.current.y * 0.08;
    groupRef.current.rotation.y = Math.cos(t * 0.08) * 0.05 + mouseRef.current.x * 0.08;
    groupRef.current.position.x = mouseRef.current.x * 0.5;
    groupRef.current.position.y = mouseRef.current.y * 0.3;
  });

  // Listen to mouse on window
  useMemo(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <group ref={groupRef}>
      {tubes.map((tube, i) => (
        <mesh key={i}>
          <tubeGeometry args={[tube.curve, 30, 0.04 + Math.random() * 0.06, 6, false]} />
          <meshBasicMaterial color={tube.color} transparent opacity={0.4 + Math.random() * 0.3} />
        </mesh>
      ))}
      {/* Connection nodes */}
      {tubes.map((tube, i) => {
        const points = tube.curve.getPoints(4);
        return points.map((p, j) => (
          <mesh key={`node-${i}-${j}`} position={p}>
            <sphereGeometry args={[0.06 + Math.random() * 0.04, 8, 8]} />
            <meshBasicMaterial color={tube.color} transparent opacity={0.3} />
          </mesh>
        ));
      })}
    </group>
  );
}

export default function PipelineBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ opacity: 0.6 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <PipelineCloud />
      </Canvas>
    </div>
  );
}
