// import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails";
import Basket from "../components/Basket";

const Routeconfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/product-details/:id/basket/:id" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default Routeconfig;
