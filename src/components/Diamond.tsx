import { useRef } from 'react'
import { Octahedron } from '@react-three/drei'
import { DoubleSide, Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

const Diamond = () => {
  const ref = useRef<Mesh>(null)
  useFrame((state, delta) => (ref.current!.rotation.y += delta / 2))

  return (
    <Octahedron scale={[1, 2, 1]} ref={ref}>
      <meshPhongMaterial transparent opacity={0.5} color="black" side={DoubleSide} />
    </Octahedron>
  )
}

export default Diamond
