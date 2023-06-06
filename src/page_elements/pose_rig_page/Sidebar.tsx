import { MainButton } from "../../components/Buttons"

const Sidebar = () => {
    return (
        <div className='hidden md:flex flex-col justify-between items-center py-5 w-[300px] font-mono bg-gray-800'>
            <h1 className='text-2xl text-white'>PoseRig</h1>
            <hr className='border-gray-700 border-2 w-3/4'/>
            <MainButton text='Pose Library'/>
            <MainButton text='Rig'/>
            <MainButton text='Animation'/>
            <MainButton text='Export'/>
            <hr className='border-gray-700 border-2 w-3/4'/>
            <MainButton text='Settings'/>
        </div>
    )
}

export default Sidebar