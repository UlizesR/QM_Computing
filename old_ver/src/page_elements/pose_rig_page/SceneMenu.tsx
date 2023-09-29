// import React from 'react';
import { GrCube } from 'react-icons/gr';
import TPose from '../../assets/tpose';

const SceneMenu = () => {
  return (
    <div className='top-0 fixed z-20 w-1/3 h-12 p-2 flex items-center gap-2'>
      <TPose className='h-[35px]'/>
      <GrCube className='text-4xl' />
    </div>
  )
}

export default SceneMenu