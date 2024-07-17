import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  basketProducts: [],
};

export const gettAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get("http://localhost:3001/basketProducts");
  return response.data;
});
export const deleteProducts = createAsyncThunk("deleteProducts", async (id) => {
  const response = await axios.delete(
    `http://localhost:3001/basketProducts/${id}`
  );
  return response.data;
});
export const setAllProducts = createAsyncThunk(
  "setAllproducts",
  async (product, { getState }) => {
    try {
      const { basket } = getState();
      const currentProduct = basket.basketProducts.find(
        (p) => p.id == product.id
      );
      if (currentProduct) {
        const updatedProduct = {
          ...currentProduct,
          urunAdedi: currentProduct.urunAdedi + product.urunAdedi,
          price: currentProduct.price + product.price,
        };
        const response = await axios.put(
          `http://localhost:3001/basketProducts/${product.id}`,
          updatedProduct
        );
        return response.data;
      } else {
        const response = await axios.post(
          "http://localhost:3001/basketProducts",
          product
        );

        return response.data;
      }
    } catch (error) {
      return isRejectedWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
export const basketSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // removeProduct: (state, action) => {
    //   state.basketProducts = state.basketProducts.filter(
    //     (product) => product.id !== action.payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(gettAllProducts.fulfilled, (state, action) => {
        state.basketProducts = [...action.payload];
      })

      // .addCase(setAllProducts.fulfilled, (state, action) => {
      //   const deneme1 = state.basketProducts.findIndex((product) => {
      //     product.id === action.payload.id;
      //   });
      //   if (deneme1 !== -1) {
      //     state.basketProducts[deneme1] = action.payload;
      //   } else {
      //     state.basketProducts.push(action.payload);
      //   }
      // })
      .addCase(setAllProducts.fulfilled, (state, action) => {
        const deneme = state.basketProducts.findIndex(
          (product) => product.id == action.payload.id
        );
        if (deneme) {
          state.basketProducts[deneme].urunAdedi =
            state.basketProducts[deneme].urunAdedi + action.payload.urunAdedi;
        } else {
          state.basketProducts = [...state.basketProducts, action.payload];
        }
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.basketProducts = state.basketProducts.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addCase(setAllProducts.rejected, (state, action) => {
        console.error("Error adding product to basket:", action.payload);
      });
  },
});

// export const {} = basketSlice.actions;

export default basketSlice.reducer;
