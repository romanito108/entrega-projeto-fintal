// ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para obter o ID do item
import ItemDetail from './ItemDetail'; // Componente que vai exibir os detalhes

const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: `Produto ${id}`,
        description: `Descrição detalhada do Produto ${id}`,
        price: (id * 100).toFixed(2),
        pictureUrl: `/img/product${id}.jpg`,
      });
    }, 2000); // Simula um delay de 2 segundos
  });
};

function ItemDetailContainer() {
  const { id } = useParams(); // Pega o ID do item da URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Inicia o carregamento
    getItem(id).then((data) => {
      setItem(data); // Atualiza o estado com os dados do item
      setLoading(false); // Carregamento concluído
    });
  }, [id]); // Quando o ID mudar, o efeito será disparado novamente

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      {loading ? (
        <p>Carregando detalhes do produto...</p>
      ) : (
        item && <ItemDetail item={item} /> // Passa os dados para o componente ItemDetail
      )}
    </div>
  );
}

export default ItemDetailContainer;
