/** @format */

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Elips from "../Assets/Elips.png";

const Checkout = () => {
  const [products, setProducts] = useState(null);
  const [sukses, setSukses] = useState(false);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setSukses(!sukses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [sukses]);

  return (
    <>
      <div className="flex h-screen bg-[#F6F2E4] gap-5  ">
        <div className="flex flex-col py-5 justify-between pr-10 basis-2/3 bg-white my-5 overflow-y-auto overscroll-contain ">
          {products &&
            products.map((product) => (
              <div className=" h-60 flex font-['Poppins']">
                <div className="flex basis-1/3 h-full items-center justify-center relative">
                  <img className="h-full absolute" src={Elips} />
                  <img
                    className="h-32 relative self-center object-contain"
                    src={product.linkGambar}
                    alt={product.nama}
                  />
                </div>
                <div className="flex flex-col basis-2/3 justify-start h-full">
                  <div className="grid grid-cols-2 basis-2/3 ">
                    <div className="flex  font-semibold text-black text-2xl items-center ">
                      {product.nama}
                    </div>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="flex underline justify-end text-2xl text-[#6E7E2B] items-center">
                      Remove
                    </button>
                    {/* <div className="flex">500 ml</div> */}
                  </div>
                  <div className="flex justify-between basis-1/3 text-[#7D794F] font-semibold text-lg">
                    <div className=" text-[#6E7E2B]  text-3xl font-bold ">
                      {product.harga} €
                    </div>
                  </div>
                  <div className="flex basis-1/3 gap-3  items-center font-semibold text-[#7D794F] text-lg">
                    Quantity
                    <input
                      type="number"
                      className="w-14 border-2 border-[#AAA183]/50 "></input>
                  </div>
                  <button className=" text-start underline text-[#6E7E2B]">
                    ADD TO WISHLIST
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col basis-1/3 bg-white my-5 font-['Poppins'] text-[#7D794F] pl-5">
          <div className="flex basis-1/6 tracking-widest text-6xl font-bold items-center border-b-2 border-[#AAA183]/50">
            Total
          </div>
          <div className="flex pr-5 basis-2/6 flex-col py-10 gap-20 justify-center text-2xl border-b-2 border-[#AAA183]/50">
            <div className="flex justify-between font-medium">
              <div>Subtotal</div>
              <div className="text-black font-semibold">
                {products?.map((item) => item.harga).reduce((a, b) => a + b)} €
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-medium">Shipping</div>
              <div className="text-black">Calculated on checkout</div>
            </div>
          </div>
          <div className="flex pr-5 basis-1/6 items-center text-2xl font-bold text-black justify-between">
            <div>Total</div>
            <div>
              {products?.map((item) => item.harga).reduce((a, b) => a + b)} €
            </div>
          </div>
          <div className="flex flex-col basis-2/6justify-start items-center gap-5 pt-10">
            <Link
              to="/Shipping"
              className="text-white py-3 px-56 bg-[#6E7E2B]/70 border-2 hover: border-[#6E7E2B]/70 hover:bg-transparent hover:text-[#6E7E2B] text-2xl">
              Checkout
            </Link>
            <Link to="/Catalog" className="text-xl underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
