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
            textDecoration: "none", 
            color: "inherit", 
            transition: "transform 0.3s ease-in-out", 
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
              transition: "transform 0.3s ease-in-out", 
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={produto.pictureUrl}
              alt={produto.title}
              style={{
                width: "100%",
                height: "200px", 
                objectFit: "cover", 
                borderRadius: "8px",
              }}
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
