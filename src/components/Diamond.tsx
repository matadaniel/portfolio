import { useEffect, useRef, useState } from 'react'
import { DoubleSide, Mesh, OctahedronGeometry, type PointLight } from 'three'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

const Diamond = () => {
  const ref = useRef<Mesh>(null)
  const bulbRef = useRef<PointLight>(null)
  const [scroll, setScroll] = useState(
    window.scrollY / (document.body.offsetHeight - window.innerHeight)
  )

  const handleScroll = () => {
    setScroll(window.scrollY / (document.body.offsetHeight - window.innerHeight))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useFrame((state, delta) => {
    ref.current!.rotation.y += delta / 4

    bulbRef.current!.position.set(
      -1 * Math.cos(scroll * Math.PI),
      2 * Math.sin(scroll * Math.PI) + 0.06,
      -1 * Math.cos(scroll * Math.PI)
    )
  })

  const geometry = new OctahedronGeometry()
  geometry.scale(1, 2, 1)

  for (let i = 0; i < 4; i++) geometry.addGroup(i * 6, 6, i)

  return (
    <>
      <pointLight color="white" ref={bulbRef} intensity={5}>
        <Sphere args={[0.06, 16, 8]}>
          <meshBasicMaterial color={0x7b7b7b} />
        </Sphere>
      </pointLight>
      <mesh geometry={geometry} ref={ref}>
        <meshPhongMaterial transparent opacity={0.5} color="rgb(79, 79, 79)" side={DoubleSide} />
      </mesh>
    </>
  )
}

export default Diamond
