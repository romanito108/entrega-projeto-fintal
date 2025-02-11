import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div>
      <span>{totalItems || 0}</span>
    </div>
  );
};

export default CartWidget;