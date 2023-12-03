import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carrito from './Carrito';

import { useCartContext } from '../Context/CarritoContext.jsx';
import { useLikesContext } from '../Context/LikesContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import FavoriteList from './Favorites';

function MenuHamburguesa() {
  const { carrito, mostrarCarrito, setMostrarCarrito, vaciarCarrito, eliminarDelCarrito, agregarAlCarrito } = useCartContext();
  const { likedProducts, mostrarLikes, setMostrarLikes } = useLikesContext();

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito((prevMostrarCarrito) => !prevMostrarCarrito);
    // setMenuAbierto(false);
  };

  const toggleLikes = () => {
    setMostrarLikes((prevMostrarLikes) => !prevMostrarLikes);
    // Comentario la siguiente línea para que no cierre el menú hamburguesa al hacer clic en favoritos
    // setMenuAbierto(false);
  };

  useEffect(() => {
    setMenuAbierto(false); // Cerrar el menú al cambiar de página
  }, [window.location.pathname]);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const mostrarCarritoHandler = () => {
    setMostrarCarrito(true);
    cerrarMenu();
  };

  const agregarAlCarritoYMostrar = (producto) => {
    agregarAlCarrito(producto);
    mostrarCarritoHandler();
    setMenuAbierto(true); // Abrir el menú automáticamente al agregar productos
  };

  const eliminarDelCarritoYCerrarMenu = (id, cantidad) => {
    eliminarDelCarrito(id, cantidad);
    setMenuAbierto(true); // No cerrar el menú al quitar productos
  };

  return (
    <>
      <div className='contenedor-menu-hamburguesa'>
        <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`} onClick={() => setMenuAbierto(!menuAbierto)}>
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>

        <nav className={`nav-principal ${menuAbierto ? 'abierto' : 'cerrado'}`}>
          <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`} onClick={() => setMenuAbierto(!menuAbierto)}>
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
          </div>

          <ul>
            <Link to="/Home" onClick={cerrarMenu}>
              Inicio
            </Link>
            <Link to="/Productos" onClick={cerrarMenu}>
              Productos
            </Link>
            <Link to="/Ofertas" onClick={cerrarMenu}>
              Ofertas
            </Link>
            <Link to="/Nosotros" onClick={cerrarMenu}>
              Nosotros
            </Link>
          </ul>

          <div>
            <ul>
              <li onClick={toggleCarrito}>
                <FontAwesomeIcon className='iconos' icon={faShoppingCart} style={{ cursor: 'pointer' }} />
                {carrito.length > 0 && <span>{carrito.length}</span>}
              </li>
              <li onClick={toggleLikes}>
                <FontAwesomeIcon className='iconos' icon={faHeart} style={{ cursor: 'pointer' }} />
                {likedProducts.length > 0 && <span>{likedProducts.length}</span>}
              </li>
              {mostrarCarrito && <Carrito />}
              {mostrarLikes && <FavoriteList />}
            </ul>
          </div>

        </nav>
      </div>
    </>
  );
}

export default MenuHamburguesa;

