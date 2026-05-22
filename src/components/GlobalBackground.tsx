import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  theme: string;
}

function ParticleField({ theme }: ParticleFieldProps) {
  const count = 2000;
  const mesh = useRef<THREE.Points>(null);
  
  // Track mouse coordinates
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentMouseX = useRef(0);
  const currentMouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random positions, colors, and random factors for drift
  const [positions, colors, randoms] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    const color = new THREE.Color();
    
    const isLight = theme === 'light';
    
    for (let i = 0; i < count; i++) {
      // Random coordinates in a bounding box
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      randoms[i] = Math.random();

      // Mix of brand blue (#0070f3), accent green (#00FF41), and theme-dependent grey
      const rand = Math.random();
      if (rand > 0.98) {
        color.set(isLight ? '#00b32d' : '#00FF41'); // Accent Green (darker for light mode)
      } else if (rand > 0.85) {
        color.set('#0070f3'); // Brand Blue
      } else {
        color.set(isLight ? '#cbd5e1' : '#444444'); // Grey dots
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors, randoms];
  }, [count, theme]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    const positionsAttr = mesh.current.geometry.attributes.position;
    
    // Animate particles individually (subtle drift upwards)
    for(let i = 0; i < count; i++) {
        positionsAttr.array[i * 3 + 1] += 0.002 * (0.5 + randoms[i]);
        // Reset position if it goes too high
        if (positionsAttr.array[i * 3 + 1] > 7.5) {
            positionsAttr.array[i * 3 + 1] = -7.5;
        }
    }
    positionsAttr.needsUpdate = true;

    // Smooth lerp for mouse
    currentMouseX.current += (mouseX.current - currentMouseX.current) * 0.05;
    currentMouseY.current += (mouseY.current - currentMouseY.current) * 0.05;

    // Apply combined rotation (time-based + mouse interaction)
    mesh.current.rotation.y = time * 0.02 + currentMouseX.current * 0.15;
    mesh.current.rotation.x = time * 0.01 - currentMouseY.current * 0.15;
  });

  return (
    <points ref={mesh}>
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
        size={0.04}
        vertexColors={true}
        transparent={true}
        opacity={theme === 'light' ? 0.8 : 0.6}
        sizeAttenuation={true}
        blending={theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function GlobalBackground({ theme = 'dark' }: { theme?: string }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80" key={theme}>
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <fog attach="fog" args={[theme === 'light' ? '#f8fafc' : '#050505', 2, 7]} />
        <ParticleField theme={theme} />
      </Canvas>
    </div>
  );
}
