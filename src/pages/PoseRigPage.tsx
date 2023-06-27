import { useState } from "react"
import { Scene } from "../page_elements/pose_rig_page/Scene"
import { Suspense } from "react"
import PoseGallery from "../page_elements/pose_rig_page/PoseGallery"
import SceneMenu from "../page_elements/pose_rig_page/SceneMenu"

const PoseRigPage = () => {
  const [showGallery, setShowGallery] = useState(false)
  return (
    <Suspense fallback={null}>
        <div className='h-screen bg-slate-700 flex'>
            <SceneMenu />
            <PoseGallery showGallery={showGallery} setShowGallery={setShowGallery}/>
            <div className='w-screen flex'>
                <Scene />
            </div>
        </div>
    </Suspense>
  )
}

export default PoseRigPage