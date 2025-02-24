import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"; // Importando o arquivo de estilos

const Cart = () => {
  const { cart, removeItem, clear, totalItems } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + ((item.Preço || 0) * (item.quantity || 1)), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Seu carrinho está vazio</h2>
        <Link to="/" className="back-to-store">Voltar para a loja</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Seu Carrinho</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              {/* Exibindo a imagem */}
              {item.ImagemUrl && ( // Verifica se a imagem existe
                <img
                  src={item.ImagemUrl} // URL da imagem
                  alt={item.Título} // Texto alternativo
                  className="item-image"
                />
              )}
              <span className="item-title">{item.Título}</span>
              <span className="item-quantity">{item.quantity}x</span>
              <span className="item-price">R$ {(item.Preço * item.quantity).toFixed(2)}</span>
            </div>
            <button className="remove-item" onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p className="total-price">Total: R$ {totalPrice.toFixed(2)}</p>
        <button className="clear-cart" onClick={clear}>Limpar Carrinho</button>
      </div>
    </div>
  );
};

export default Cart;