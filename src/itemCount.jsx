import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial); // O contador começa com o valor inicial
  const [isDisabled, setIsDisabled] = useState(false); // Controle para verificar se o botão deve ser desabilitado

  const handleIncrement = () => {
    if (count < stock) {  // Verifica se a quantidade não excede o estoque
      setCount(count + 1); // Incrementa a quantidade
    }
  };

  const handleDecrement = () => {
    if (count > 1) {  // Garante que a quantidade não será menor que 1
      setCount(count - 1); // Decrementa a quantidade
    }
  };

  const handleAddToCart = () => {
    if (count <= stock && stock > 0) { // Só chama o onAdd se houver estoque disponível
      onAdd(count);  // Chama a função de callback passando a quantidade
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
          disabled={stock === 0 || count === 0}  // Desabilita se não houver estoque ou se o count for 0
        >
          Adicionar ao Carrinho
        </button>
      </div>

      {stock === 0 && <p>Sem estoque disponível</p>} {/* Exibe mensagem quando não há estoque */}
    </div>
  );
}

export default ItemCount;
