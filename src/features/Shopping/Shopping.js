import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  cartItems: [],
  listedItems: [
    {
      name: "Nike Air Max 270",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89a9429b-c0d9-4699-b897-c261fddaf221/W+AIR+MAX+270.png",
      price: 150,
    },
    {
      name: "Adidas Ultraboost 21",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e16f8f2d-7b05-4f39-ad55-7bd3444fc724/W+AIR+MAX+270.png",
      price: 180,
    },
    {
      name: "Puma RS-X",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/390025/08/sv04/fnd/IND/fmt/png/RS-X-3D-Unisex-Sneakers",
      price: 120,
    },
    {
      name: "Reebok Zig Kinetica",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/395205/02/sv01/fnd/PNA/fmt/png/Suede-XL-Sneakers",
      price: 130,
    },
    {
      name: "PUMA x LAMELON",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/311177/01/sv01/fnd/PNA/fmt/png/PUMA-x-LAMELO-BALL-MB.03-Halloween-Big-Kids'-Basketball-Shoes",
      price: 175,
    },
    {
      name: " AdiDas Astoundrun Shoes",
      imageUrl:
        "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
      price: 65,
    },
    {
      name: "AdiDas VS Pace 2.0",
      imageUrl:
        "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/97310c99ec74478ba99265769df85ea0_9366/vs-pace-2.0-shoes.jpg",
      price: 60,
    },
    {
      name: "Bruton 27",
      imageUrl:
        "https://m.media-amazon.com/images/I/71f3BmjCwtL._AC_UL480_FMwebp_QL65_.jpg",
      price: 160,
    },
    {
      name: "Bruton 20",
      imageUrl:
        "https://m.media-amazon.com/images/I/61VHvg7wvCL._AC_UL480_FMwebp_QL65_.jpg",
      price: 140,
    },
    {
      name: "Campus 288",
      imageUrl:
        "https://m.media-amazon.com/images/I/613zb10e5wL._AC_UL480_FMwebp_QL65_.jpg",
      price: 130,
    },
  ],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
        imageUrl: action.payload.imageUrl,
        id: nanoid(),
      };
      const existingItem = state.cartItems.find(
        (i) => i.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newItems;
    },
    updateQuantity: (state, action) => {
      const updatedItem = state.cartItems
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
      state.cartItems = updatedItem;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  shoppingSlice.actions;
export const aLlistedItems = (state) => state.shopping.listedItems;
export const aCartItems = (state) => state.shopping.cartItems;
export default shoppingSlice.reducer;
