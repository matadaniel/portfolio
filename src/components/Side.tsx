import { MeshPortalMaterial, Octahedron } from '@react-three/drei'
import { useFrame, type Euler } from '@react-three/fiber'
import { useRef, type ReactNode } from 'react'
import { DoubleSide, type PointLight } from 'three'

interface SideProps {
  children: ReactNode
  index: number
  rotation: Euler
  scroll: number
}

const Side = ({ children, index, rotation, scroll }: SideProps) => {
  const bulbRef = useRef<PointLight>(null)

  useFrame(() => {
    bulbRef.current!.position.set(
      -1 * Math.cos(scroll * Math.PI),
      2 * Math.sin(scroll * Math.PI) + 0.06,
      -1 * Math.cos(scroll * Math.PI)
    )
  })

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      <group rotation={rotation}>
        <pointLight color="white" ref={bulbRef} intensity={5} />
        <directionalLight position={[-1, -1, 1]} intensity={6 * Math.PI} />
        <directionalLight position={[-1, 1, 1]} intensity={2 * Math.PI} />
        <pointLight position={[1, 2, 0]} intensity={4} color={0xacbbf4} />
        <ambientLight intensity={Math.PI} />
      </group>

      <Octahedron scale={[1, 2, 1]}>
        <meshPhongMaterial transparent opacity={0.5} color="rgb(79, 79, 79)" side={DoubleSide} />
      </Octahedron>

      <mesh>
        {children}
        <meshPhongMaterial color="rgb(79, 79, 79)" />
      </mesh>
    </MeshPortalMaterial>
  )
}

export default Side
