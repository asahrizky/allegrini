import React from 'react'
import '../Assets/fonts.css';
import PersonalInfoContent from '../Components/PersonalInfoContent';
import ProfileNav from '../Components/ProfileNav';
import ProfilePicture from '../Components/ProfilePicture';

const PersonalInfo = () => {
  return (
    <>
    <div className='flex h-screen'>
      <div className='basis-1/3'>
        <ProfilePicture />
        <ProfileNav/>
      </div>
      <div className='basis-3/4'>
        <PersonalInfoContent/>
      </div>
    </div>
    </>
  )
}

export default PersonalInfo
