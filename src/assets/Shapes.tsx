import {useState} from 'react'

interface ShapeProps {
    index: number
    color: string
}

const Cube = (props: ShapeProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <mesh 
        position={[props.index, -3, 0]} 
        scale={1} 
        onClick={(e) => {
          e.stopPropagation()
          setSelected(!selected)
        }}
    >
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color={selected ? 'blue' : props.color} />
    </mesh>
  )
}

const Sphere = (props: ShapeProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <mesh
      position={[props.index*2, -3, 0]}
      scale={1}
      onClick={(e) =>{
        e.stopPropagation()
        setSelected(!selected)
      }}
    >
      <sphereGeometry args={[1, 32, 32]}/>
      <meshStandardMaterial color={selected ? 'blue' : props.color} />
    </mesh>
  )
}

const Cylinder = (props: ShapeProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <mesh
      position={[props.index*2, -3, 0]}
      scale={1}
      onClick={(e) =>{
        e.stopPropagation()
        setSelected(!selected)
      }}
    >
      <cylinderGeometry args={[1, 1, 1, 32]}/>
      <meshStandardMaterial color={selected ? 'blue' : props.color} />
    </mesh>
  )
}

const Cone = (props: ShapeProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <mesh
      position={[props.index*2, -3, 0]}
      scale={1}
      onClick={(e) =>{
        e.stopPropagation()
        setSelected(!selected)
      }}
    >
      <coneGeometry args={[1, 1, 32]}/>
      <meshStandardMaterial color={selected ? 'blue' : props.color} />
    </mesh>
  )
}

const Torus = (props: ShapeProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <mesh
      position={[props.index*3, -3, 0]}
      scale={1}
      onClick={(e) =>{
        e.stopPropagation()
        setSelected(!selected)
      }}
    >
      <torusGeometry args={[1, 0.5, 32, 32]}/>
      <meshStandardMaterial color={selected ? 'blue' : props.color} />
    </mesh>
  )
}

const Plane = (props: ShapeProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <mesh
      position={[props.index*4, -3, 0]}
      scale={1}
      onClick={(e) =>{
        e.stopPropagation()
        setSelected(!selected)
      }}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[4, 4, 0,0]} />
      <meshStandardMaterial color={selected ? 'blue' : props.color} />
    </mesh>
  )
}

const Ring = (props: ShapeProps) => {
  const [selected, setSelected] = useState(false)
  return (
    <mesh
      position={[props.index*4, -3, 0]}
      scale={1}
      onClick={(e) =>{
        e.stopPropagation()
        setSelected(!selected)
      }}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <ringGeometry args={[1, 2, 32, 32]}/>
      <meshStandardMaterial color={selected ? 'blue' : props.color} />
    </mesh>
  )
}

export {Cube, Sphere, Cylinder, Cone, Torus, Plane, Ring}