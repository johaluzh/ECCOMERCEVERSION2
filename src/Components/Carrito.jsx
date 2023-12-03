import React from 'react';
import { useCartContext } from '../Context/CarritoContext';

const Carrito = () => {
  const { carrito, removeFromCart, vaciarCarrito } = useCartContext();
  if (carrito.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  const precioTotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  

  return (
    <div className='carrito-container'>
      <h3>Tu carrito:</h3>
      <ul className='lista-carrito'>
        {carrito && carrito.map((producto) => (
          <li className='lista-productos' key={producto.id}>
            <img src={producto.imagen} width={60} height={60} alt={producto.nombre} />
            <h4>{producto.nombre}</h4>
            <h5>Precio: ${producto.precio}</h5>
            <h5>Cantidad: {producto.cantidad}</h5>
            <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${precioTotal.toFixed(2)}</h3> {/* Mostrar el precio total */}
      <button style={{marginTop: '1rem' , marginBottom: '0.5rem'}}>Comprar</button>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button> {/* Agregar la funcionalidad de vaciar el carrito */}
    </div>
  );
};

export default Carrito;





