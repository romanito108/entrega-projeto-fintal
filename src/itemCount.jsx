import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);


  const handleIncrease = () => {
    if (count < stock) {
      console.log('Incrementando, contador atual:', count);
      setCount(count + 1);
    } else {
      console.log('Não é possível incrementar, limite do estoque atingido.');
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      console.log('Decrementando, contador atual:', count);
      setCount(count - 1);
    } else {
      console.log('Não é possível decrementar, limite inferior atingido.');
    }
  };


  const handleAddToCart = () => {
    if (stock > 0) {
      console.log('Adicionando ao carrinho:', count);
      onAdd(count);
    } else {
      console.log('Estoque esgotado, não é possível adicionar ao carrinho.');
    }
  };

  return (
    <div>
      <h2>Camisa Tiger</h2>
      <div>
        <button onClick={handleDecrease} disabled={count === 1 || stock === 0}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handleIncrease} disabled={count === stock || stock === 0}>
          +
        </button>
      </div>
      <button onClick={handleAddToCart} disabled={stock === 0}>
        Adicionar ao carrinho
      </button>
      {stock === 0 && <p style={{ color: 'red' }}>Sem estoque disponível</p>}
    </div>
  );




 
  

};

export default ItemCount;
