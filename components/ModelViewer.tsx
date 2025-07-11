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
  const { scene } = useGLTF(url)

  useEffect(() => {
    sceneRef.current = scene
    onLoaded()
  }, [scene])

  return (
    <Center>
      <primitive object={scene} scale={3} rotation={rotation} />
    </Center>
  )
}


type ViewerProps = {
  modelUrl: string
  uniqueKey: string
}

export default function ModelViewer({ modelUrl, uniqueKey }: ViewerProps) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const sceneRef = useRef<THREE.Object3D | null>(null)
  const [ready, setReady] = useState(false)

  // ✅ Reset ready state whenever modelUrl changes
  useEffect(() => {
    setReady(false)
  }, [modelUrl])

  // ✅ Camera + controls adjustment after model loads
  useEffect(() => {
    if (!controlsRef.current || !cameraRef.current || !sceneRef.current || !ready) return;

    const box = new THREE.Box3().setFromObject(sceneRef.current);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Center the model
    sceneRef.current.position.sub(center);

    // Base camera distance
    const maxDim = Math.max(size.x, size.y, size.z);
    let distance = maxDim * 2;

    // ✅ Special closer view for Narmer Palette
    if (uniqueKey === '3') {
      const sphere = box.getBoundingSphere(new THREE.Sphere());
      distance = sphere.radius * 3.5; // 👈 You can tweak this (3 to 4 is a good range)
    }

    // Camera & controls setup
    cameraRef.current.position.set(0, 0, distance);
    cameraRef.current.lookAt(0, 0, 0);
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
  }, [ready]);


  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px]">
      <Canvas
        key={uniqueKey}
        camera={{ position: [0, 0, 5], fov: 55 }}
        onCreated={({ camera }) => {
          cameraRef.current = camera as THREE.PerspectiveCamera
        }}
      >
        <ambientLight intensity={0.5} />
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
        <OrbitControls ref={controlsRef} />
      </Canvas>
    </div>
  )
}
