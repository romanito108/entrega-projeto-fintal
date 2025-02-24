import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={decreaseQuantity} disabled={quantity === 1}>
        ➖
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity} disabled={quantity === stock}>
        ➕
      </button>
      <button onClick={() => onAdd(quantity)}> Adicionar ao Carrinho</button>
    </div>
  );
};

export default ItemCount;
