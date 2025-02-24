import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebaseConfig"; 
import { collection, query, where, getDocs } from "firebase/firestore";
import { useCart } from "./CartContext";

const ItemListContainer = () => {
  console.log("Renderizando ItemListContainer");
  const { categoryId } = useParams();
  const { addItem } = useCart();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({}); // Estado para armazenar a quantidade de cada produto

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const itemsCollection = collection(db, "produtos-coder");
        let q = categoryId 
          ? query(itemsCollection, where("CategoriaId", "==", categoryId)) 
          : query(itemsCollection);

        const querySnapshot = await getDocs(q);
        const produtosFiltrados = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProdutos(produtosFiltrados);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar os produtos.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchItems();
  }, [categoryId]);

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  return (
    <div>
      {loading && <p>Carregando produtos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
          {produtos.map((produto) => (
            <div
              key={produto.id}
              style={{
                border: "2px solid #ddd",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <h2>{produto.Título}</h2>
              <p>{produto.Descrição}</p>
              <p>R$ {produto.Preço}</p>
              <img
                src={produto.ImagemUrl || "https://via.placeholder.com/200"}
                alt={produto.Título}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <input
                type="number"
                min="1"
                max={produto.stock}
                value={quantities[produto.id] || 1}
                onChange={(e) => handleQuantityChange(produto.id, parseInt(e.target.value))}
                style={{ width: "60px", marginTop: "10px", textAlign: "center" }}
              />
              <button
                onClick={() => addItem(produto, quantities[produto.id] || 1)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
