import {
  Vector3,
  PointLight,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  DirectionalLight,
  OctahedronGeometry,
  MeshPhongMaterial,
  AmbientLight,
} from 'three'
import { extend, createRoot } from '@react-three/fiber'
import Diamond from './Diamond'
import Bulb from './Bulb'

extend({
  PointLight,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  DirectionalLight,
  OctahedronGeometry,
  MeshPhongMaterial,
  AmbientLight,
})

const root = createRoot(document.querySelector('canvas')!)

root.configure({ camera: { position: new Vector3(0, 0.5, 1).setLength(5), zoom: 1.75 } })

window.addEventListener('resize', () =>
  root.configure({
    size: { width: window.innerWidth, height: window.innerHeight, top: 0, left: 0 },
  })
)

window.dispatchEvent(new Event('resize'))

document.getElementById('loading-bar')!.remove()

root.render(
  <>
    <Bulb />
    <directionalLight position={[-1, -1, 1]} intensity={6 * Math.PI} />
    <directionalLight position={[-1, 1, 1]} intensity={2 * Math.PI} />
    <pointLight position={[1, 2, 0]} intensity={4} color={0xacbbf4} />
    <ambientLight intensity={Math.PI} />
    <Diamond />
  </>
)
