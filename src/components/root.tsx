import {
  Vector3,
  PointLight,
  Mesh,
  SphereGeometry,
  MeshStandardMaterial,
  DirectionalLight,
  OctahedronGeometry,
  MeshPhongMaterial,
} from 'three'
import { extend, createRoot } from '@react-three/fiber'
import Diamond from './Diamond'

extend({
  PointLight,
  Mesh,
  SphereGeometry,
  MeshStandardMaterial,
  DirectionalLight,
  OctahedronGeometry,
  MeshPhongMaterial,
})

const root = createRoot(document.querySelector('canvas')!)

root.configure({ camera: { position: new Vector3(0, 0.5, 1).setLength(5), zoom: 1.75 } })

window.addEventListener('resize', () =>
  root.configure({
    size: { width: window.innerWidth, height: window.innerHeight, top: 0, left: 0 },
  })
)

window.dispatchEvent(new Event('resize'))

root.render(
  <>
    <directionalLight position={[-1, -1, 1]} intensity={6} />
    <directionalLight position={[-1, 1, 1]} intensity={2} />
    <pointLight />
    <Diamond />
  </>
)
