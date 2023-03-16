import React from 'react'
import '../Assets/fonts.css';
import ProfilePicture from '../Components/ProfilePicture';

const PersonalInfo = () => {
  return (
    <div className='flex h-screen'>
        <div className='basis-1/3'>
            <ProfilePicture/>
        </div>
        
        <div className='basis-3/4'>
            right
        </div>
    </div>
  )
}

export default PersonalInfo
