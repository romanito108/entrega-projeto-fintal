import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, totalItems } = useCart();

  return (
    <div>

      {cart.length > 0 && (
        <Link to="/cart">
          <div>
            <span>Carrinho</span>
            <span>{totalItems()}</span> 
          </div>
        </Link>
      )}
    </div>
  );
};

export default CartWidget;
