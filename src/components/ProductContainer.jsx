// import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/productSlice";
import Product from "./Product";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const { products, loading, inputValue, filteredProducts } = useSelector(
    (store) => store.product
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  // console.log(products);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Sayfa ortasında göstermek için
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div style={{ flexWrap: "wrap", marginTop: "25px" }} className="flexRow">
      {(inputValue ? filteredProducts : products).map((product, i) => {
        return <Product key={i} product={product} />;
      })}
    </div>
  );
};

export default ProductContainer;
