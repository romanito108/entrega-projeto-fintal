import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial); 
  const [isDisabled, setIsDisabled] = useState(false); 

  const handleIncrement = () => {
    if (count < stock) { 
      setCount(count + 1); 
    }
  };

  const handleDecrement = () => {
    if (count > 1) {  
      setCount(count - 1); // Decrementa a quantidade
    }
  };

  const handleAddToCart = () => {
    if (count <= stock && stock > 0) { 
      onAdd(count);  
    }
  };

  return (
    <div>
      <button onClick={handleDecrement} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count >= stock}>+</button>
      
      <div>
        <button 
          onClick={handleAddToCart}
          disabled={stock === 0 || count === 0}  
        >
          Adicionar ao Carrinho
        </button>
      </div>

      {stock === 0 && <p>Sem estoque disponível</p>} 
    </div>
  );
}

export default ItemCount;
