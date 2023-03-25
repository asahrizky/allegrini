/** @format */

import React from "react";
import NavbarProfile2 from "../Components/NavbarProfile2";
import NavbarProfile from "../Components/NavbarProfile";
import HeroContent from "../Components/heroContent";
import ContactUs from "../Components/ContactUs";
import ProductInfo from "../Components/ProductInfo";
import Collection from "../Components/Collection";
import SliderImg from "../Components/SliderImg";

const SignedIn = () => {
  return (
    <>
      <div>
        <NavbarProfile />
        <HeroContent />
        <SliderImg />
        <ProductInfo />
        <Collection />
        <ContactUs />
      </div>
    </>
  );
};

export default SignedIn;
