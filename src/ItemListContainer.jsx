import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import mockFetchItems from "./mock"; 
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";  // Importe o ItemCount

const ItemListContainer = () => {
  const { id } = useParams(); 
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mockFetchItems().then((data) => {
      // Adicionando a propriedade 'stock' aos produtos
      const produtosComEstoque = data.map(item => ({
        ...item,
        stock: 10 // Você pode personalizar o estoque de cada produto conforme necessário
      }));
      const filteredItems = id ? produtosComEstoque.filter(item => item.categoryId === parseInt(id)) : produtosComEstoque;
      setProdutos(filteredItems);
      setLoading(false);
    });
  }, [id]); 

  const handleAddToCart = (quantity, productId) => {
    console.log(`Adicionado ao carrinho: ${quantity} itens do produto ${productId}`);
  };

  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      {loading ? <p>Carregando produtos...</p> : (
        <div>
          {produtos.map((produto) => (
            <div key={produto.id}>
              <h2>{produto.title}</h2>
              <img src={produto.pictureUrl} alt={produto.title} />
              <p>{produto.description}</p>
              <p>Preço: R${produto.price}</p>
              <ItemCount 
                stock={produto.stock}  // Passando o estoque para o ItemCount
                initial={1}  // Inicia o contador com 1
                onAdd={(quantity) => handleAddToCart(quantity, produto.id)}  // Passa a quantidade e o id do produto
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
