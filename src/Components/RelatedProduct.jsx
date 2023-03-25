/** @format */

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedProduct = () => {
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
    <div className="flex flex-col items-start ml-28 ">
      <div className="font-bold text-5xl my-4 text-[#7D794F]">
        RELATED PRODUCT
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-10">
        {product &&
          product.map((product, i) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group">
              <div className="aspect-w-1 aspect-h-1 w-full pb-5 overflow-hidden rounded-lg bg-alles-200 xl:aspect-w-7 xl:aspect-h-8">
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
  );
};

export default RelatedProduct;
