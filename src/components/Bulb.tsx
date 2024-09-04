import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import type { PointLight } from 'three'

const Bulb = () => {
  const ref = useRef<PointLight>(null)
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

  useFrame(() => {
    ref.current!.position.set(
      -1 * Math.cos(scroll * Math.PI),
      2 * Math.sin(scroll * Math.PI) + 0.06,
      -1 * Math.cos(scroll * Math.PI)
    )
  })

  return (
    <pointLight color="white" ref={ref} intensity={5}>
      <mesh>
        <sphereGeometry args={[0.06, 16, 8]} />
        <meshBasicMaterial color={0x7b7b7b} />
      </mesh>
    </pointLight>
  )
}

export default Bulb
