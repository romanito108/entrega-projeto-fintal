import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { addItem, totalItems } = useCart();
  const [quantity, setQuantity] = useState(1);

 
  const showFinishButton = totalItems() > 0;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={() => addItem(item, quantity)}>Adicionar ao Carrinho</button>

     
      {showFinishButton && (
        <div>
          <Link to="/cart">
            <button>Finalizar minha compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
