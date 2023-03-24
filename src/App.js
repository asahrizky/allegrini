/** @format */
import FormLogin from "./Components/FormLogin";
import DetailProduk from "./Components/DetailProduk";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import HeroContent from "./Components/heroContent";
import logo from "./logo.svg";
import NewProduk from "./Components/NewProduk";
import "./styles/base.css";
import { Route, Routes } from "react-router-dom";
import ProductSingle from "./Components/ProductSingle";
import FormSignUp from "./Components/FormSignUp";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroContent />}>
          <Route path="/product" element={<NewProduk />} />
          <Route path="/product/:id" element={<ProductSingle />} />
          <Route path="/Login" element={<FormLogin />} />
          <Route path="/SignUp" element={<FormSignUp />} />
          <Route path="/slider" element={<Slider />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
