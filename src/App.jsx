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
import MyOrdersComplete from "./Components/MyOrdersComplete";
import MyOrdersReceive from "./Components/MyOrdersReceive";
import MyOrdersShip from "./Components/MyOrdersShip";
import MyOrdersPay from "./Components/MyOrdersPay";
import MyOrdersAll from "./Components/MyOrdersAll";
import Shipping from "./Pages/Shipping";
import Payment from "./Pages/Payment";

// app.use("/", router);

function App() {
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
          <Route path="MyOrders" element={<MyOrders />}>
            <Route path="All" element={<MyOrdersAll />} />
            <Route path="Completed" element={<MyOrdersComplete />} />
            <Route path="Received" element={<MyOrdersReceive />} />
            <Route path="Ship" element={<MyOrdersShip />} />
            <Route path="Pay" element={<MyOrdersPay />} />
          </Route>
          <Route path="Wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/Checkout" element={<CheckoutPage />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
