// ============================================
// REACT THREE FIBER - Blank Scene
// ============================================
// Published to: https://ramai-productions.github.io/website/

import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0
    }}>
      <Canvas>
        {/* Black background - completely blank */}
        <color attach="background" args={['#000000']} />
      </Canvas>
    </div>
  );
}

