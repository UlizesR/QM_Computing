import { BiCube } from 'react-icons/bi'
import { GiWireframeGlobe } from 'react-icons/gi'


import { MeshButton } from "../../components/Buttons"

const MeshSidebar = () => {
  return (
    <div className="mesh-sidebar">
        <MeshButton icon={<BiCube className='text-3xl'/>} />
        <MeshButton icon={<GiWireframeGlobe className='text-3xl'/>} />
    </div>
  )
}

export default MeshSidebar