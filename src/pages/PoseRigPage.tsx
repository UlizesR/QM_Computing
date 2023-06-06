import { Scene } from "../page_elements/pose_rig_page/Scene"
import Sidebar from "../page_elements/pose_rig_page/Sidebar"
import MeshSidebar from "../page_elements/pose_rig_page/MeshSidebar"
import { Suspense } from "react"

const PoseRigPage = () => {
  return (
    <Suspense fallback={null}>
        <div className='h-screen bg-slate-700 flex'>
            <Sidebar />
            <MeshSidebar />
            <div className='w-[calc(100%-300px)] flex-1'>
                <Scene />
            </div>
        </div>
    </Suspense>
  )
}

export default PoseRigPage