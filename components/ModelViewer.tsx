import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

type ModelProps = {
  url: string
  sceneRef: React.MutableRefObject<THREE.Object3D | null>
  onLoaded: () => void
  rotation?: THREE.Euler
}

function Model({ url, sceneRef, onLoaded, rotation }: ModelProps) {
  const { scene } = useGLTF(url, true, true); // Enable draco compression and suspense
  useEffect(() => {
    sceneRef.current = scene;
    onLoaded();
  }, [scene, onLoaded, sceneRef]);
  return (
    <Center>
      <primitive object={scene} scale={2.5} rotation={rotation} />
    </Center>
  );
}

type ViewerProps = {
  modelUrl: string
  uniqueKey: string
}

export default function ModelViewer({ modelUrl, uniqueKey }: ViewerProps) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Object3D | null>(null);
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset ready state when modelUrl changes
  useEffect(() => {
    setReady(false);
  }, [modelUrl]);

  // Camera and controls adjustment after model loads
  useEffect(() => {
    if (!controlsRef.current || !cameraRef.current || !sceneRef.current || !ready) return;
    const box = new THREE.Box3().setFromObject(sceneRef.current);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Center the model
    sceneRef.current.position.sub(center);

    // Adjust camera distance based on device
    const maxDim = Math.max(size.x, size.y, size.z);
    let distance = isMobile ? maxDim * 2.5 : maxDim * 2;

    // Special closer view for Narmer Palette
    if (uniqueKey === '3') {
      const sphere = box.getBoundingSphere(new THREE.Sphere());
      distance = isMobile ? sphere.radius * 4 : sphere.radius * 3.5;
    }

    // Camera & controls setup
    cameraRef.current.position.set(0, 0, distance);
    cameraRef.current.lookAt(0, 0, 0);
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
  }, [ready, uniqueKey, isMobile]);

  return (
    <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[400px]">
      <Canvas
        key={uniqueKey}
        camera={{ position: [0, 0, 5], fov: isMobile ? 60 : 55 }}
        onCreated={({ camera }) => {
          cameraRef.current = camera as THREE.PerspectiveCamera;
        }}
        gl={{ antialias: isMobile ? false : true }} // Disable antialias on mobile for performance
      >
        <ambientLight intensity={isMobile ? 0.4 : 0.5} />
        <Suspense fallback={null}>
          <Environment preset="warehouse" background={false} />
          <Center>
            <Model
              url={modelUrl}
              sceneRef={sceneRef}
              onLoaded={() => setReady(true)}
              rotation={uniqueKey === '3' ? new THREE.Euler(Math.PI / 2, 0, Math.PI / 2 * 2) : uniqueKey === "2" ? new THREE.Euler(0, -(Math.PI / 2), 0) : undefined}
            />
          </Center>
        </Suspense>
        <OrbitControls ref={controlsRef} enablePan={false} enableZoom={!isMobile} />
      </Canvas>
    </div>
  );
}