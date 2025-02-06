import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import ItemListContainer from "./ItemListContainer"; 
import ItemDetailContainer from "./ItemDetailContainer"; 
import Menu from "./Menu"; 
import Cart from "./Cart";
import { CartProvider } from "./CartContext"; 
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />  
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
