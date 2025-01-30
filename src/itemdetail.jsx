// ItemDetail.js
import React from 'react';

function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} style={{ width: '300px' }} />
      <p>{item.description}</p>
      <p><strong>Preço:</strong> R$ {item.price}</p>
    </div>
  );
}

export default ItemDetail;
