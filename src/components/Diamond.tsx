import { useEffect, useRef, useState } from 'react'
import { Mesh, OctahedronGeometry, type PointLight } from 'three'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import Side from './Side'

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
        <Side index={0} rotation={[0, Math.PI / 4, 0]} scroll={scroll}>
          <torusKnotGeometry args={[0.25, 0.1, 256, 16]} />
        </Side>
        <Side index={1} rotation={[0, (Math.PI * 3) / 4, 0]} scroll={scroll}>
          <icosahedronGeometry args={[0.25]} />
        </Side>
        <Side index={2} rotation={[0, (Math.PI * 5) / 4, 0]} scroll={scroll}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
        </Side>
        <Side index={3} rotation={[0, (Math.PI * 7) / 4, 0]} scroll={scroll}>
          <torusGeometry args={[0.25, 0.1]} />
        </Side>
      </mesh>
    </>
  )
}

export default Diamond
