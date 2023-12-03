import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../Context/ProductsContext';
import { useCartContext } from '../Context/CarritoContext';
import { useLikesContext } from '../Context/LikesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductosList = () => {
  const productos = useProductContext();
  const { addToCart } = useCartContext();
  const { addToLikes } = useLikesContext();

  return (
    <div className='container-productos'>
      <div className='titulo'>
        <h1>Todos nuestros productos: </h1>
      </div>

      <ul className='container-list-products'>
        {productos.map((producto) => (
          <div className='card-product' key={producto.id}>
            <li key={producto.id}>
              <div className='img-container'>
                <img src={producto.imagen} alt={producto.nombre} width={200} height={200} />
              </div>

              <div className='products-description'>
                <h3 style={{ fontSize: '1.7rem' }}>{producto.nombre}</h3>
                <h6 style={{ fontSize: '1rem' }}>{producto.marca}</h6>
                <h5 style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Precio: {producto.precio}</h5>
                <p style={{ marginTop: '0.5rem', fontWeight: '400' }}>{producto.cuotas}</p>
              </div>

              <div className='container-buttons'>
                {/* Enlace al detalle del producto */}
                <Link to={`/producto/${producto.id}`}>
                  <button className='boton-text'>Ver mas</button>
                </Link>
                <button className='boton-text' onClick={() => addToCart(producto)}>
                  Añadir al carrito
                </button>
                <button className='boton-text' onClick={() => addToLikes(producto)}><FontAwesomeIcon icon={faHeart} />
      
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductosList;

