import React from "react";

function ItemDetail({ item }) {
  if (!item) {
    return <p>Nenhum item encontrado.</p>;
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", maxWidth: "400px", margin: "20px auto" }}>
      <img
        src={item.pictureUrl}
        alt={item.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2 style={{ margin: "10px 0" }}>{item.title}</h2>
      <p style={{ color: "#555" }}>{item.description}</p>
      <p>
        <strong>Preço:</strong> R$ {item.price.toFixed(2)}
      </p>
    </div>
  );
}

export default ItemDetail;
