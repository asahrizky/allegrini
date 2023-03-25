/** @format */

import React from "react";
import Line from "../Assets/Line2.png";
import Shampoo from "../Assets/Shampoo.png";
import ShowerGel from "../Assets/ShowerGel.png";
import BodyLotion from "../Assets/BodyLotion.png";
import HairCon from "../Assets/HairConditioner.png";
import Soap from "../Assets/Soap.png";
import BodyLot from "../Assets/BodyLot.png";
import HBW from "../Assets/HBW.png";
import Candle from "../Assets/candle.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Collection = () => {
  const [product, setProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div
        id="Collection"
        className="flex flex-col  font-['Poppins'] text-[#7D794F]">
        <div className=" flex font-bold text-2xl justify-center py-3">
          Oliva del Mediterraneo
        </div>
        <div className=" flex gap-5 py-3">
          <div className="flex items-center">
            <img src={Line} />
          </div>
          <div className="font-semibold text-xl">Our Collection</div>
        </div>
        <div className="bg-white flex h-96 overflow-x-scroll gap-5">
          {product &&
            product.map((product, i) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group">
                <div className="aspect-w-1 ml-5  aspect-h-1 w-full pb-5 overflow-hidden rounded-lg bg-alles-200 xl:aspect-w-7 xl:aspect-h-8">
                  <svg
                    className="w-11 h-20 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="#6E7E2B">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <img
                    src={product.linkGambar}
                    alt={product.nama}
                    className="h-52 w-80 object-contain object-center group-hover:opacity-75 "
                  />

                  <h3 className="text-lg text-alles-500 font-bold font-si text-center ">
                    {product.nama}
                    {console.log(product.title)}
                  </h3>
                  <p className="mt-1 text-lg text-center font-medium text-alles-500">
                    {product.harga} €
                  </p>
                </div>
              </Link>
            ))}
        </div>
        <Link
          to="/product"
          className=" underline flex gap-3 font-semibold justify-end text-lg py-4">
          Shop all
          <div className="flex items-center">
            <Icon
              icon="material-symbols:arrow-back-ios-new-rounded"
              color="#7d794f"
            />
            <Icon
              icon="material-symbols:arrow-back-ios-new-rounded"
              color="#7d794f"
              hFlip={true}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Collection;
