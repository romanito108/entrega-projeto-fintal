import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import mockFetchItems from "./mock"; 
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mockFetchItems().then((data) => {
      const foundItem = data.find(item => item.id === parseInt(id));
      setItem(foundItem);
      setLoading(false);
    });
  }, [id]); 

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      {loading ? <p>Carregando detalhes do produto...</p> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
