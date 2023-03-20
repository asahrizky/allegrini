import React from 'react'
import '../Assets/fonts.css';
import ProfilePicture from '../Components/ProfilePicture';
import ProfileNav from '../Components/ProfileNav';
import { Outlet } from 'react-router-dom';


const ProfilePage = () => {
  return (
    <div className='flex h-screen'>
        <div className='basis-1/3'>
            <ProfilePicture/>
            <ProfileNav/>
        </div>
        
        <div className='basis-3/4'>
            <Outlet/>
        </div>
    </div>
  )
}

export default ProfilePage
