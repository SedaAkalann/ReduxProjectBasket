import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://fakestoreapi.com";
// fonk il parametresi yani "getAllProducts " kısmı işlemin adı ve türü gibi birşey olabilir bilgi versin yani işlem hakkında gibi
export const getAllProducts = createAsyncThunk("getallproducts", async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
});

const initialState = {
  products: [],
  loading: false,
  selectedProduct: {},
  inputValue: "",
  filteredProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectedProductFunc: (state, action) => {
      const deneme =
        state.products &&
        state.products.find((product) => {
          return product.id == action.payload;
        });
      state.selectedProduct = deneme
        ? { ...state.selectedProduct, ...deneme }
        : {};
    },
    changeInp: (state, action) => {
      state.inputValue = action.payload;
    },
    filteredProdFunc: (state, action) => {
      state.filteredProducts = state.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = [...action.payload];
    });
  },
});

export const { selectedProductFunc, changeInp, filteredProdFunc } =
  productSlice.actions;

export default productSlice.reducer;
