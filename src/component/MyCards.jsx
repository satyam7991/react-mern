import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const MyCards = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    const productInfo = fetch("https://dummyjson.com/products")
        .then(result => result.json())
        .then((data) => {
            setProducts(data.products);
        });
}, []); 
  return <div className="d-flex justify-content-between flex-wrap">
         {products.map(product =>
        <Cards
           title = {product.title}
           description = {product.description}
           price = {product.price}
           brand = {product.brand}
           thumbnail = {product.thumbnail}
        />)}
  </div>;
};

export default MyCards;