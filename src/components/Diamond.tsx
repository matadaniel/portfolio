import { useRef } from 'react'
import { DoubleSide, Mesh, OctahedronGeometry } from 'three'
import { useFrame } from '@react-three/fiber'

const Diamond = () => {
  const ref = useRef<Mesh>(null)
  useFrame((state, delta) => (ref.current!.rotation.y += delta / 4))

  const geometry = new OctahedronGeometry()
  geometry.scale(1, 2, 1)

  for (let i = 0; i < 4; i++) geometry.addGroup(i * 6, 6, i)

  return (
    <mesh geometry={geometry} ref={ref}>
      <meshPhongMaterial transparent opacity={0.5} color="rgb(79, 79, 79)" side={DoubleSide} />
    </mesh>
  )
}

export default Diamond
