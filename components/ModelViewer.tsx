import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function Model({
  url,
  sceneRef,
  onLoaded,
}: {
  url: string
  sceneRef: any
  onLoaded: () => void
}) {
  const { scene } = useGLTF(url)

  useEffect(() => {
    sceneRef.current = scene
    onLoaded()
  }, [scene])

  return <primitive object={scene} scale={3} />
}

export default function ModelViewer({
  modelUrl,
  uniqueKey,
}: {
  modelUrl: string
  uniqueKey: string
}) {
  const controlsRef = useRef<any>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const sceneRef = useRef<THREE.Object3D | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!controlsRef.current || !cameraRef.current || !sceneRef.current || !ready) return

    controlsRef.current.reset()

    const box = new THREE.Box3().setFromObject(sceneRef.current)
    const center = new THREE.Vector3()
    box.getCenter(center)

    const size = box.getSize(new THREE.Vector3()).length()
    const distance = size * 1.2

    cameraRef.current.position.set(center.x, center.y, center.z + distance)
    cameraRef.current.lookAt(center)

    controlsRef.current.target.copy(center)
    controlsRef.current.update()
  }, [uniqueKey, ready])

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
          <Environment preset="sunset" background={false} />
          <Center>
            <Model
              url={modelUrl}
              sceneRef={sceneRef}
              onLoaded={() => setReady(true)}
            />
          </Center>
        </Suspense>
        <OrbitControls ref={controlsRef} />
      </Canvas>
    </div>
  )
}