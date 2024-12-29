import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home"; 
import Header from "./Components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
