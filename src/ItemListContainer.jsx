import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import mockFetchItems from "./mock"; 
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { id } = useParams(); 
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mockFetchItems().then((data) => {
    
      const filteredItems = id ? data.filter(item => item.categoryId === parseInt(id)) : data;
      setProdutos(filteredItems);
      setLoading(false);
    });
  }, [id]); 

  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      {loading ? <p>Carregando produtos...</p> : <ItemList produtos={produtos} />}
    </div>
  );
};

export default ItemListContainer;
