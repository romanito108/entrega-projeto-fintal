import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import mockFetchItems from "./mock"; 
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";  

const ItemListContainer = () => {
  const { id } = useParams(); 
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    mockFetchItems()
      .then((data) => {
    
        const produtosComEstoque = data.map(item => ({
          ...item,
          stock: 10 
        }));
        const filteredItems = id ? produtosComEstoque.filter(item => item.categoryId === parseInt(id)) : produtosComEstoque;
        setProdutos(filteredItems);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar os produtos.");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = (quantity, productId) => {
    console.log(`Adicionado ao carrinho: ${quantity} itens do produto ${productId}`);
  };

  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      {loading && <p>Carregando produtos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {produtos.map((produto) => (
            <div 
              key={produto.id} 
              style={{ 
                border: "1px solid #ddd", 
                padding: "16px", 
                borderRadius: "8px", 
                width: "calc(33% - 40px)", 
                boxSizing: "border-box", 
                textAlign: "center" 
              }}
            >
              <img 
                src={produto.pictureUrl} 
                alt={produto.title} 
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} 
              />
              <h2>{produto.title}</h2>
              <p>{produto.description}</p>
              <p><strong>Preço:</strong> R${produto.price}</p>
              <ItemCount 
                stock={produto.stock} 
                initial={1}  
                onAdd={(quantity) => handleAddToCart(quantity, produto.id)}  
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
