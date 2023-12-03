// CarritoContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [productos, setProductos] = useState([]);

  const addToCart = (producto) => {
    const productoEnCarrito = carrito.find((p) => p.id === producto.id);

    if (productoEnCarrito) {
      const nuevoCarrito = carrito.map((p) =>
        p.id === producto.id
          ? {
              ...p,
              cantidad: p.cantidad + 1,
              total: (p.cantidad + 1) * p.precio,
            }
          : p
      );
      setCarrito(nuevoCarrito);
    } else {
      const precioNumerico = parseFloat(producto.precio.replace(/[^\d.]/g, ''));
      setCarrito([
        ...carrito,
        {
          ...producto,
          precio: precioNumerico,
          cantidad: 1,
          total: precioNumerico,
        },
      ]);
    }

    setMostrarCarrito(true);
    setMostrarMenu(true);
  };

  const removeFromCart = (id) => {
    const productoEnCarrito = carrito.find((p) => p.id === id);

    if (productoEnCarrito.cantidad > 1) {
      const nuevoCarrito = carrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad - 1, total: (producto.cantidad - 1) * producto.precio }
          : producto
      );
      setCarrito(nuevoCarrito);
    } else {
      const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
      setCarrito(nuevoCarrito);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data.productos))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <CartContext.Provider value={{ carrito, mostrarCarrito, mostrarMenu, productos, addToCart, removeFromCart, vaciarCarrito , setMostrarCarrito }}>

      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

