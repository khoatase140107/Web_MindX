import React from "react";
import { useCartContext } from "../context/CartContext";
import { useFoodContext } from "../context/FoodContext";

export default function AddToCart(props) {
  const foodCtx = useFoodContext();
  const { addToCart } = foodCtx;
  const { index, valueCart } = props;
  return (
    <button
      className="btnAdd"
      onClick={() => {
        addToCart(index, valueCart);
      }}
    >
      +Add
    </button>
  );
}
