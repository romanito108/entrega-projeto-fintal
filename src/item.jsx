// Item.js
import React from 'react';

const Item = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
      <img src={item.pictureUrl} alt={item.title} style={{ width: '100px', height: '100px' }} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Preço: R${item.price}</p>
    </div>
  );
};

export default Item;
