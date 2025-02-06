import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ItemDetail from './ItemDetail';

const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === '999') {
        reject('Produto não encontrado');
      } else {
        resolve({
          id,
          title: `Produto ${id}`,
          description: `Descrição detalhada do Produto ${id}`,
          price: (id * 100).toFixed(2),
          pictureUrl: `/img/product${id}.jpg`,
        });
      }
    }, 2000); 
  });
};

function ItemDetailContainer() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); 
    setError(null); 
    getItem(id)
      .then((data) => {
        setItem(data); 
        setLoading(false); 
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      {loading ? (
        <p>Carregando detalhes do produto...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        item && <ItemDetail item={item} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
