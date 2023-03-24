/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import BodyLot from '../Assets/BodyLot.png'
import { Link, Outlet } from "react-router-dom";




const ProductSingle = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const id = params?.id;

  const fetchProduct = async () => {
    const response = await axios
      .get(`http://localhost:5000/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log("Product: ", response.data);

    setProduct(response.data);
  };
  console.log("ID: ", id);
  useEffect(() => {
    fetchProduct();
  }, []);

  const [showNotif, setShowNotif] = useState(false); 

  return (
    // <div className="container mx-auto">
    //   <img src={product?.linkGambar}></img>
    //   {product?.nama}
    //   <p>{product?.deskripsi}</p>
    //   <p>{product?.harga}</p>
    // </div>
    <>
      <div className="flex h-screen font-['Poppins']">
        <div className="flex basis-1/12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#7D794F" className="w-24 h-24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

        </div>
        <div className="flex basis-11/12">
          <div className="flex relative  basis-1/3 py-10">
            <div className="absolute pl-3 pt-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke= "#6E7E2B" className="w-24 h-24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </div>
          <div className="flex items-center w-full bg-[#F6F2E4] justify-center rounded-xl">
            <img className="h-4/6" src= {BodyLot} alt="Body Lotion"/>
          </div>
          </div>
          <div className="flex flex-col  basis-2/3 py-10 px-10 ">
          <div className="flex text-[#7D794F] font-bold text-4xl  pb-10 border-b-2 border-[#7D794F]/50 ">
            Judul
          </div>
          <div className="flex py-10 text-3xl font-bold">
            harga
          </div>
          <div className="flex flex-col text-[#7D794F] text-3xl text-justify pb-10">
              The vital force of Olive Oil lies in the richness of anti-oxidant and anti-free radical substances responsible for cellular aging. Vitamin E, phytosterols, tocopherols, squalene perform all the fundamental functions that the skin needs to stay young and fresh over time. This formulation gently cleanses and moisturizes, leaving the skin toned and supple.
              <br></br>
              <br></br>
              <span className="font-semibold">Fragrance :</span> Combination of fragrances with a Mediterranean flavour the freshness of Bergamot, Eucalyptus Leaves and Orange Blossom is enhanced by the combination of heart notes of Olive, Thyme, Ylang Ylang and a flowery bouquet. All made even more unique and special by the aromatic notes of Patchouli, Musk and Honey accord.
          </div>
          <div className="flex justify-between py-10">
            <div className="flex flex-col basis-1/3 text-[#7D794F]">
              <span className="text-2xl">
                Quantity
              </span> 
              <input
                type="number"
                className="w-80 py-3 border-2 border-[#AAA183]/50 font-['Poppins'] font-semibold text-2xl">
              </input>         
            </div>
            <button className="flex basis-2/3 bg-[#7D794F]/70 text-white items-center justify-center text-2xl border-2 border-[#7D794F] py-3 hover:text-[#7D794F]/70 hover:border-white hover:bg-white " onClick={()=> setShowNotif(true)}>
              Add to cart
            </button>
          </div>
          </div>
        </div>
        {showNotif ? (
          <>
            <div className="">

            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-white" onClick={()=> setShowNotif(false)}></div> 
          </>
        ) : null}
      </div>
    </>
  );
};

export default ProductSingle;
