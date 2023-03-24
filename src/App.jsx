/** @format */
import FormLogin from "./Components/FormLogin";
// import DetailProduk from "./Components/DetailProduk";
// import Slider from "./Components/Slider";
import HeroPage from "./Pages/heroPage";
// import logo from "./logo.svg";
import Catalog from "./Pages/Catalog";
import "./styles/base.css";
import ProductPage from "./Pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import FormSignUp from "./Components/FormSignUp";
import ProfilePage from "./Pages/ProfilePage";
import SignedIn from "./Pages/SignedIn";
import PersonalInfo from "./Components/PersonalInfo";
import MyOrders from "./Components/MyOrders";
import Wishlist from "./Components/Wishlist";
import Footer from "./Components/Footer";
import CheckoutPage from "./Pages/CheckoutPage";

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
      <Routes>
        <Route path="/" element={<HeroPage />}>
          <Route path="Login" element={<FormLogin />} />
          <Route path="SignUp" element={<FormSignUp />} />
        </Route>
        <Route path="/product" element={<Catalog />}></Route>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/SignedIn" element={<SignedIn />} />
        <Route path="/ProfilePage" element={<ProfilePage />}>
          <Route path="PersonalInfo" element={<PersonalInfo />} />
          <Route path="MyOrders" element={<MyOrders />} />
          <Route path="Wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/Checkout" element ={<CheckoutPage/>} />
      </Routes>
      {/* <div id="slider" className="min-h-screen bg-alles-200">
        <Slider images={sliders} />
      </div> */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
