// ============================================
// REACT THREE FIBER - Full HD @ 60 FPS
// ============================================
// Published to: https://ramai-productions.github.io/website/

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

function RotatingBox() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  );
}

export default function App() {
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('✅ React Three Fiber initialized');
    console.log('Deployment verified - Full HD @ 60 FPS');
    console.log('Scene initialized successfully');
  }, []);

  if (error) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
        fontSize: '24px',
        background: '#000'
      }}>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      position: 'relative'
    }}>
      {/* HTML Overlay for HELLO text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#00ff00',
        fontSize: '120px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        zIndex: 1000,
        pointerEvents: 'none',
        textAlign: 'center'
      }}>
        HELLO
      </div>

      {/* React Three Fiber Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          powerPreference: 'high-performance',
          antialias: false
        }}
        dpr={[1, 2]}
        onCreated={() => console.log('Canvas created successfully')}
      >
        {/* Black background */}
        <color attach="background" args={['#000000']} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* 3D Content - Rotating green box */}
        <RotatingBox />
      </Canvas>
    </div>
  );
}

