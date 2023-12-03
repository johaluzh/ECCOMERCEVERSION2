import React from 'react';
import { useProductContext } from '../Context/ProductsContext';
import { useCartContext } from '../Context/CarritoContext';
import { useLikesContext } from '../Context/LikesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Nuevo componente para ofertas
const OfertasList = () => {
  const productos = useProductContext();
  const { addToCart} = useCartContext();
  const { addToLikes } = useLikesContext();

  // Filtrar productos con precio menor a 100,000
  const ofertas = productos.filter((producto) => parseFloat(producto.precio.replace('$', '')) < 100000);

  return (
    <div className='container-productos'>
      <div className='titulo'>
        <h1>Ofertas Destacadas</h1>
      </div>
      <ul className='container-list-products'>
        {ofertas.map((oferta) => (
          <div className='card-product' key={oferta.id}>
            <li>
              <div className='img-container'>
                <img src={oferta.imagen} alt={oferta.nombre} width={200} height={200} />
              </div>
              
              <div className='products-description'>
                <h3 style={{fontSize:'1.7rem'}}>{oferta.nombre}</h3>
                <h6 style={{fontSize:'1rem'}}>{oferta.marca}</h6>
                <h5 style={{fontSize:'1.2rem', marginTop:'0.5rem'}}>Precio: {oferta.precio}</h5>
                <p style={{marginTop:'0.5rem', fontWeight:'400'}}>{oferta.cuotas}</p>
              </div>

              <div className='container-buttons'>
                <Link to={`/producto/${oferta.id}`}>
                  <button className='boton-text'>Ver mas</button>
                </Link>
                <button className='boton-text' onClick={() => addToCart(oferta)}>
                  Añadir al carrito
                </button>
                <button className='boton-text' onClick={() => addToLikes(oferta)}><FontAwesomeIcon icon={faHeart} />
      
      </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OfertasList;


