import React, { useContext } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice, totalItems } = useCart();

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
      <h2>Meu carrinho</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>
              {item.title} - {item.quantity} x R${item.price}
            </p>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>

      <h3>Total: R$ {totalPrice().toFixed(2)}</h3>
      <h4>Total de itens: {totalItems()}</h4>

      <button onClick={clearCart}>Esvaziar Carrinho</button>

    
      {cart.length > 0 && (
        <button>Finalizar minha compra</button>
      )}
    </div>
  );
};

export default Cart;
