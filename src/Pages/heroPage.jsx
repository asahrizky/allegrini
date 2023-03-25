import React from 'react'
import NavBar from '../Components/Navbar';
import HeroContent from '../Components/heroContent';
import '../Assets/fonts.css';
import ContactUs from '../Components/ContactUs';
import ProductInfo from '../Components/ProductInfo';
import Collection from '../Components/Collection';
import SliderImg from '../Components/SliderImg';


const heroPage = () => {
  return (
    <div>
      <>
        <NavBar/>
        <HeroContent />
        <SliderImg/>
        <ProductInfo/>
        <Collection/>
        <ContactUs />
      </>
    </div>

  )
}

export default heroPage
