import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { Cube } from "../../assets/Shapes"

export const Scene = () => {
  return (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube index={0} color='red' />
        <gridHelper position={[0,-3,0]} args={[100, 100, 0xff0000, 'teal']} />
        <OrbitControls />
    </Canvas>
  )
}
