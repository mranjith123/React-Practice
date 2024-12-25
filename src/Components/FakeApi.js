import React, { useState, useEffect } from "react";
import "../App.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const cards = products.map((product) => (
    <div key={product.id} className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-price">INR: {product.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h1 className="title">Product Dashboard</h1>
      <div className="products-grid">{cards}</div>
    </div>
  );
};

export default Product;
