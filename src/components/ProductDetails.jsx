// import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, selectedProductFunc } from "../Redux/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { decrement, increment, zero } from "../Redux/appSlice";
import { gettAllProducts, setAllProducts } from "../Redux/basketSlice";

const ProductDetails = () => {
  const { count } = useSelector((store) => store.app);
  // const { basketProducts } = useSelector((store) => store.basket);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, products } = useSelector((store) => store.product);
  const { basketProducts } = useSelector((store) => store.basket);
  const { title, price, description, image } = selectedProduct;
  // const { basketProducts } = useSelector((store) => store.basket);
  useEffect(() => {
    dispatch(selectedProductFunc(id));
    dispatch(getAllProducts());
  }, [products]);
  useEffect(() => {
    dispatch(gettAllProducts());
  }, [basketProducts]);

  const handleClick = () => {
    dispatch(zero());
    if (count) {
      dispatch(
        setAllProducts({
          id,
          title,
          description,
          image,
          price: Number(price * count),
          urunAdedi: count,
        })
      );
    } else {
      alert("Lütfen ürün adedi seçiniz");
    }
  };
  return (
    <div
      style={{
        marginTop: "30px",
        gap: "35px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div>
        <img width={300} height={500} src={image} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: "arial" }}>{title}</h1>
        <p style={{ fontFamily: "arial" }}>{description} </p>
        <h1 style={{ color: "red", fontSize: "50px", fontWeight: "bold" }}>
          {price}₺
        </h1>
        <div
          style={{
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div>
            <CiCircleMinus
              onClick={() => dispatch(decrement())}
              style={{ fontSize: "40px", cursor: "pointer" }}
            />
          </div>
          <div style={{ fontSize: "25px", color: "red" }}>{count}</div>
          <div>
            <CiCirclePlus
              onClick={() => dispatch(increment())}
              style={{ fontSize: "40px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleClick}
            style={{
              marginTop: "15px",

              backgroundColor: "transparent",
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "12px",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "3px 3px 4px red",
              fontWeight: "bold",
              color: "red",
            }}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
