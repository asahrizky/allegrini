import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="flex h-screen bg-[#F6F2E4] gap-5">
        <div className="flex flex-col basis-2/3 bg-white my-5 overflow-y-auto overscroll-contain">
          <div className="flex h-1/2 bg-yellow-200 w-full border-b-2 border-[#AAA183]/50">
            items
          </div>
          <div className="flex h-1/2 bg-red-200 w-full">items</div>
        </div>
        <div className="flex flex-col basis-1/3 bg-white my-5 font-['Poppins'] text-[#7D794F] pl-5">
          <div className="flex basis-1/6 tracking-widest text-6xl font-bold items-center border-b-2 border-[#AAA183]/50">
            Total
          </div>
          <div className="flex basis-2/6 flex-col py-10 gap-20 justify-center text-2xl border-b-2 border-[#AAA183]/50">
            <div className="flex justify-between font-semibold">
              <div>Subtotal</div>
              <div className="text-black font-semibold">33,90 €</div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Shipping</div>
              <div className="text-black">Claculated on checkout</div>
            </div>
          </div>
          <div className="flex basis-1/6 items-center text-3xl font-bold text-black justify-between">
            <div>Total</div>
            <div>33,90 €</div>
          </div>
          <div className="flex flex-col basis-2/6justify-start items-center gap-5 pt-10">
            <button className="text-white py-3 px-56 bg-[#6E7E2B]/70 border-2 hover: border-[#6E7E2B]/70 hover:bg-transparent hover:text-[#6E7E2B] text-2xl">
              Checkout
            </button>
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
