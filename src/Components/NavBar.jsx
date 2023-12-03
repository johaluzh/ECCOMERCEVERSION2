import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../Context/CarritoContext'; // Importa el hook de contexto
import Carrito from '../Components/Carrito'; // Importa el componente de carrito
import { useLikesContext } from '../Context/LikesContext';
import AddToFavorites from './Favorites';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const { carrito } = useCartContext(); 
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const { likedProducts  } = useLikesContext(); 
  const [mostrarLikes, setMostrarLikes] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const toggleLikes = () => {
    setMostrarLikes(!mostrarLikes);
  };

  return (
    <nav className='container-nav-carrito'>
      <ul>
        <Link to="/Home">Inicio</Link>
        <Link to="/Productos">Productos</Link>
        <Link to="/Ofertas">Ofertas</Link>
        <Link to="/Nosotros">Nosotros</Link>
      </ul>

      <div>
        <ul className='container-cart-likes'>
          <li onClick={toggleCarrito}>
            <FontAwesomeIcon className='iconos' icon={faShoppingCart} style={{ cursor: 'pointer' }} />
            {carrito.length > 0 && <span>{carrito.length}</span>}
          </li>

          <li onClick={toggleLikes}>
            <FontAwesomeIcon className='iconos' icon={faHeart} style={{ cursor: 'pointer' }} />
            {likedProducts.length > 0 && <span>{likedProducts.length}</span>}
          </li>

          {mostrarCarrito && <Carrito />}
          {mostrarLikes && <AddToFavorites />}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
