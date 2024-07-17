// import React from "react";
import { useNavigate } from "react-router-dom";

import "../css/Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { id, title, price, description, category, image } = product;

  const handleClick = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="card flexColumn">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺ </h3>
      </div>
      <button onClick={handleClick} className="productBtn">
        Ürün Detayları
      </button>
    </div>
  );
};

export default Product;
