import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import ItemListContainer from "./ItemListContainer"; 
import ItemDetailContainer from "./ItemDetailContainer"; 
import Menu from './Menu'; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu /> 
        <Routes>
          <Route path="/" element={<ItemListContainer />} /> 
          <Route path="/category/:id" element={<ItemListContainer />} /> 
          <Route path="/item/:id" element={<ItemDetailContainer />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
