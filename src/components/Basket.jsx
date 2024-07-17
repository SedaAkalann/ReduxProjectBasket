import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketDetails from "./BasketDetails";
import { gettAllProducts } from "../Redux/basketSlice";

const Basket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettAllProducts());
  }, []);
  const { basketProducts } = useSelector((store) => store.basket);
  return (
    <div className="flexcolumn" style={{ marginTop: "20px" }}>
      {basketProducts.map((product) => {
        return <BasketDetails key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Basket;
