import React from "react";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../Redux/basketSlice";

const BasketDetails = ({ product }) => {
  const { title, id, price, description, image, urunAdedi } = product;
  const dispatch = useDispatch();

  const deleteProductss = () => {
    dispatch(deleteProducts(id));
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "5x 5px 5px grey",
        marginBottom: "15px",
      }}
      className="flexRow"
    >
      <div>
        <img style={{ width: "150px", height: "156px" }} src={image} alt="" />
      </div>
      <div style={{ marginLeft: "5px" }} className="flexColumn">
        <div style={{ marginBottom: "5px", color: "red" }}>{title}</div>
        <div>{description}</div>
      </div>
      <div className="flexColumn">
        <div> Adet:{urunAdedi}</div>
        <div style={{ color: "red" }}>{price}₺</div>
        <button onClick={deleteProductss}>Sil</button>
      </div>
    </div>
  );
};

export default BasketDetails;
