import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adiciona produto
    addProductToCart: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    // Remove produto do carrinho
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    // Diminui quantidade de um produto do carrinho
    decreaseProductQuantity(state, action) {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
});

export const { addProductToCart, removeProductFromCart, decreaseProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
