import React from 'react'
import NavBar from '../Components/Navbar';
import HeroContent from '../Components/heroContent';
import '../Assets/fonts.css';
import ContactUs from '../Components/ContactUs';
import ProductInfo from '../Components/ProductInfo';
import Collection from '../Components/Collection';


const heroPage = () => {
  return (
    <div>
      <>
        <NavBar/>
        <HeroContent />
        <ProductInfo/>
        <Collection/>
        <ContactUs />
      </>
    </div>

  )
}

export default heroPage
