import React from 'react'
import NavbarProfile from '../Components/NavbarProfile'
import HeroContent from '../Components/heroContent'
import ContactUs from '../Components/ContactUs';
import ProductInfo from '../Components/ProductInfo';

const SignedIn = () => {
  return (
    <>
    <div>
      <NavbarProfile/>
      <HeroContent/>
      <ContactUs />
      <ProductInfo/>
    </div>
    </>

  )
}

export default SignedIn
