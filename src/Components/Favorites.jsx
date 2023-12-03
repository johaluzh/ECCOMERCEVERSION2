// FavoriteList.jsx
import React from 'react';
import { useLikesContext } from '../Context/LikesContext.jsx';

const FavoriteList = () => {
  const { likedProducts, removeFromLikes, clearLikes } = useLikesContext();

  if (likedProducts.length === 0) {
    return <p>No hay productos en la lista de favoritos.</p>;
  }

  return (
    <div className='carrito-container'>
      <h2>Productos Favoritos</h2>
      <ul className='lista-carrito'>
        {likedProducts.map((producto) => (
          <li className='lista-productos' key={producto.id}>
            <img src={producto.imagen} width={60} height={60} alt={producto.nombre} />
            <h4>{producto.nombre}</h4>
            <h5>Precio: ${producto.precio}</h5>
            {/* Pasa el id del producto a removeFromLikes */}
            <button onClick={() => removeFromLikes(producto.id)}>
              Quitar de Favoritos
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearLikes}>Vaciar lista de favoritos</button>
    </div>
  );
};

export default FavoriteList;



