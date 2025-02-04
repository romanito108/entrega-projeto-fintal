import React, { useState } from 'react';
import { useCart } from './CartContext';

function ItemDetail({ item }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleBuy = () => {
    addItem(item, quantity);
    alert(`${item.title} foi adicionado ao carrinho!`);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} style={{ width: '300px' }} />
      <p>{item.description}</p>
      <p><strong>Preço:</strong> R$ {item.price}</p>
      <div>
        <label>
          Quantidade:
          <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </label>
      </div>
      <button onClick={handleBuy}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ItemDetail;
