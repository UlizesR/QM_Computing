import { HiOutlineArrowSmLeft, HiSearch } from 'react-icons/hi'

type Props = {
    showGallery: boolean
    setShowGallery: (showGallery: boolean) => void
}

const PoseGallery = (props: Props) => {

    const { showGallery, setShowGallery } = props
    
    return (
        <div className={`gallery-div ${showGallery ? "translate-x-0 " : "-translate-x-full"}`}>
        <div className='gallery-header'>
            <button className='text-white text-3xl' onClick={() => setShowGallery(false)}>
                <HiOutlineArrowSmLeft className='text-3xl'/>
            </button>
            <h1 className='text-white text-3xl'>Pose Gallery</h1>
            <label className='text-xl w-1/2 flex items-center bg-white rounded-full px-2'>
            <HiSearch className='text-3xl'/>
            <input 
                type='text' 
                placeholder='Search'
                className='p-2 w-full outline-none bg-transparent'
            />
            </label>
        </div>
        <div className='gallery'>

        </div>
        </div>
    )
}

export default PoseGallery