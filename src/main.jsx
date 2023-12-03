import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './Context/ProductsContext.jsx';
import ProductosList from '../src/Pages/ProductsList';
import OfertasList from './Pages/OfertasList';
import Nosotros from './Pages/Nosotros';
import { CartProvider } from './Context/CarritoContext.jsx';
import Carrito from './Components/Carrito';
import DetalleProducto from './Pages/DetalleProducto';
import Home from './Pages/Home.jsx';
import { LikesProvider } from './Context/LikesContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <LikesProvider>
      <Routes>
          <Route path="/" element={<App />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route
            path="/Productos"
            element={
              <ProductProvider>
                <ProductosList />
              </ProductProvider>
            }
          />
          <Route
            path="/Producto/:id" // Corregido: utiliza :id en lugar de id
            element={
              <ProductProvider>
                <DetalleProducto />
              </ProductProvider>
            }
          />
          <Route
            path="/Ofertas"
            element={
              <ProductProvider>
                <OfertasList />
              </ProductProvider>
            }
          />
          <Route path="/Nosotros" element={<Nosotros />} />
          /</Route>
        </Routes>
      </LikesProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
