import React from "react";
import { Link } from "react-router-dom"; 
import Item from './Item';

const ItemList = ({ produtos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      {produtos.map((produto) => (
        <Link
          key={produto.id}
          to={`/item/${produto.id}`} 
          style={{
            textDecoration: "none", // Remover sublinhado do link
            color: "inherit", // Herda a cor do texto
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "300px",
              flex: "1 1 calc(33.333% - 32px)", 
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <img
              src={produto.pictureUrl}
              alt={produto.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p><strong>Preço:</strong> R$ {produto.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
