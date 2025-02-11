import React, { useContext } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";




const Cart = () => {
  const { cart, removeItem, clear, totalItems } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + ((item.Preço || 0) * (item.quantity || 1)), 0);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Seu carrinho está vazio</h2>
        <Link to="/">Voltar para a loja</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Seu Carrinho</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
         {item.Título} - {item.quantity}x - R$ {(item.Preço * item.quantity).toFixed(2)}
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: R$ {totalPrice.toFixed(2)}</p>
      <button onClick={clear}>Limpar Carrinho</button>
    </div>
  );
};

export default Cart;