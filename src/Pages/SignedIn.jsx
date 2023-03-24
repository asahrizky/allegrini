import React from 'react'
import NavbarProfile from '../Components/NavbarProfile'
import HeroContent from '../Components/heroContent'
import ContactUs from '../Components/ContactUs';
import ProductInfo from '../Components/ProductInfo';
import Collection from '../Components/Collection';

const SignedIn = () => {
  return (
    <>
    <div>
      <NavbarProfile/>
      <HeroContent/>
      <ProductInfo/>
      <Collection/>
      <ContactUs />
      
    </div>
    </>

  )
}

export default SignedIn
