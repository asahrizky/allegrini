/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductSingle = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const id = params?.id;

  const fetchProduct = async () => {
    const response = await axios
      .get(`http://localhost:5000/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log("Product: ", response.data);
    console.log("ID: ", id);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto">
      <img src={product.linkGambar}></img>
      {product.nama}
      <p>{product.deskripsi}</p>
      <p>{product.harga}</p>
    </div>
  );
};

export default ProductSingle;
