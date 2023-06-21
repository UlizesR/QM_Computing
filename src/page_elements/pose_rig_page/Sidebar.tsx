import React, { useState } from 'react'
import { MainButton } from "../../components/Buttons"

type Props = {
    setShowGallery: (showGallery: boolean) => void
}

const Sidebar = (props: Props) => {

    const { setShowGallery } = props
    
    return (
        <div className='hidden md:flex flex-col justify-between items-center py-5 w-[300px] font-mono bg-gray-800'>
            <h1 className='text-2xl text-white'>Pose Rig</h1>
            <hr className='border-gray-700 border-2 w-3/4'/>
            <MainButton text='Pose Library' onClick={() => setShowGallery(true)}/>
            <MainButton text='Rig'/>
            <MainButton text='Animation'/>
            <MainButton text='Export'/>
            <hr className='border-gray-700 border-2 w-3/4'/>
            <MainButton text='Settings'/>
        </div>
    )
}

export default Sidebar