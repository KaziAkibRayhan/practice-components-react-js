import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Products Load: {products.length}</h1>
      <div className="d-flex flex-wrap justify-content-between">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
