import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.getElapsedTime();
    ringRef.current.rotation.x = Math.cos(t / 4) / 4;
    ringRef.current.rotation.y = Math.sin(t / 4) / 4;
    ringRef.current.rotation.z += 0.005;
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={ringRef}>
          <torusGeometry args={[2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#d8bf76" emissive="#d8bf76" emissiveIntensity={2} />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#1e1e1e"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>

      <pointLight position={[10, 10, 10]} intensity={1.5} color="#d8bf76" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#e4c59b" />
    </group>
  );
}

export function BackgroundParticles() {
  const count = 500;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#d8bf76"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}
