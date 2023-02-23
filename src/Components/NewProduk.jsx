/** @format */

import React, { useState, useEffect } from "react";
import Image3 from "../img/image 3.png";
import Image4 from "../img/image 4.png";
import Image11 from "../img/image 11.png";
import Image12 from "../img/image 12.png";
import Image13 from "../img/image 13.png";
import Image15 from "../img/image 15.png";
import Image16 from "../img/image 16.png";
import Image17 from "../img/image 17.png";
import Line from "../img/Line 1.png";
import axios from "axios";

export const NewProduk = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://artsalesroom.com/wp-json/wp/v2/product"
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="flex pt-10">
        <div className="mt-[15px]">
          <img src={Line} className="" />
        </div>

        <div className="top-2 flex-1 font-bold text-2xl ml-10">
          <h2 className="text-alesph">Oliva del Mediterrameo Collection</h2>
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product, i) => (
              <a key={product.id} href={product.link} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-alles-200 xl:aspect-w-7 xl:aspect-h-8">
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
                    src={product.gambar.guid}
                    alt={product.title.rendered}
                    className="h-52 w-full mb-10 object-contain object-center group-hover:opacity-75 "
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {product.title.rendered}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  €{product.harga}
                </p>
              </a>
            ))}
          {/* {products &&
            products.map((product) => {
              console.log(product);
              return (
                <div className="">
                  <img  src={product.gambar.guid} alt={product.title.rendered} />
                </div>
              );
            })} */}
        </div>
      </div>
    </div>
  );
};
