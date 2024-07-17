// import React from "react";
import "../css/Header.css";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeInp, filteredProdFunc } from "../Redux/productSlice";

// import { inputChangeFunc, productFilterFunc } from "../Redux/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { basketProducts } = useSelector((store) => store.basket);
  // const { products } = useSelector((store) => store.product);
  // const [filteredData, setFilteredData] = useState(products);
  // const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const [appColor, setAppColor] = useState(false);
  useEffect(() => {
    const root = document.getElementById("root");

    if (appColor) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [appColor]);

  const changeAppColor = () => {
    setAppColor(!appColor);
  };

  // useEffect(() => {
  //   console.log(filteredData);
  // }, [filteredData]);

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setInputValue(value);
  //   filterData(value);
  // };

  // const filterData = (value) => {
  //   const filtered = products.filter((item) => item.title.includes(value));
  //   setFilteredData(filtered);
  // };
  const handleInputChange = (e) => {
    dispatch(changeInp(e.target.value));
    dispatch(filteredProdFunc(e.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        className="flexRow"
      >
        <img src="../images/png-transparent-ferrari-horse-logo.png" alt="" />
        <div style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}>
          {" "}
          PROJE
        </div>
      </div>
      <div style={{ gap: "12px" }} className="flexRow ">
        <input
          placeholder="ürün arayınız..."
          className="headerInp"
          type="text"
          onChange={handleInputChange}
        />
        <div style={{ gap: "3px" }} className="flexRow">
          {appColor ? (
            <IoIosSunny className="headerIcon" onClick={changeAppColor} />
          ) : (
            <FaMoon className="headerIcon" onClick={changeAppColor} />
          )}

          <Badge badgeContent={basketProducts.length} color="error">
            <FaBasketShopping
              onClick={() => navigate("/product-details/:id/basket/:id")}
              className="headerIcon"
            />
          </Badge>

          {/* iconlar */}
        </div>
      </div>
    </div>
  );
};

export default Header;
