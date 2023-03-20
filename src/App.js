/** @format */
import FormLogin from "./Components/FormLogin";
// import DetailProduk from "./Components/DetailProduk";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import HeroPage from "./Pages/heroPage";
// import logo from "./logo.svg";
import { NewProduk } from "./Components/NewProduk";
import "./styles/base.css";
import ProductSingle from "./Components/ProdukSingle";
import {Route, Routes } from "react-router-dom";
import FormSignUp from "./Components/FormSignUp";
import ProfilePage from "./Pages/ProfilePage";
import PersonalInfo from "./Pages/PersonalInfo"
import Wishlist from "./Pages/Wishlist";


// app.use("/", router);



function App() {
  const sliders = [
    {
      image: "./asset/about1.png",
      title: "About Us 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl.",
      link: "https://www.google.com",
    },
    {
      image: "./asset/about2.png",
      title: "About Us 2 Broo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl.",
      link: "https://www.google.com",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path ='/' element ={ <HeroPage/> }>
          <Route path ='Login' element ={ <FormLogin/> } />
          <Route path ='SignUp' element ={ <FormSignUp/> } />
        </Route>
        <Route path="product" element={<NewProduk />} >
            <Route path="product/:id" element={<ProductSingle />} />
        </Route>
        <Route path ="ProfilePage" element = {<ProfilePage/>} />
        <Route path="/PersonalInfo" element = {<PersonalInfo/>} />
        <Route path="/Wishlist" element = {<Wishlist/>} />
      </Routes>
      {/* <div id="slider" className="min-h-screen bg-alles-200">
        <Slider images={sliders} />
      </div> */}
      <Routes>

      </Routes>

    </>
  );
}

export default App;
