import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '/src/Context/CarritoContext.jsx';
import { useProductContext } from '../Context/ProductsContext.jsx'; // Asegúrate de tener la ruta correcta
import { useLikesContext } from '../Context/LikesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function DetalleProducto() {
  const { id } = useParams();
  const { addToCart } = useCartContext();
  const { addToLikes } = useLikesContext();
  const productos = useProductContext(); // Obtén la lista de productos del contexto
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoSeleccionado = productos.find((p) => p.id === parseInt(id, 10));
    setProducto(productoSeleccionado);
  }, [id, productos]);

  const handleAgregarAlCarrito = () => {
    if (producto) {
      addToCart(producto);
      // Puedes agregar lógica adicional, como un mensaje de éxito o animación, si lo deseas.
    }
  };

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className='container-detalle-producto'>
        
      <div className='img-container-detalle'>
        <img className='img-detalle-producto' src={producto.imagen} alt={producto.nombre} width={400} height={400} />
      </div>

      <div className='detalle-producto'>
        <h2>Detalles del Producto:</h2>
        <h4>{producto.nombre}</h4>
        <h5>Marca: {producto.marca}</h5>
        <h5>Precio: {producto.precio}</h5>
      </div>

      <div className='descripcion-producto'>
        <p>"{producto.descripcion}"</p>
      </div>

      <div className='notas'>
        <dt>Notas de salida:</dt>
        <dd>{producto.salida}</dd>
        <dt>Notas de Corazón:</dt>
        <dd>{producto.corazon}</dd>
        <dt>Notas de Fondo:</dt>
        <dd>{producto.fondo}</dd>
      </div>

      <div className='botones-detalle-producto'>
        <button>Comprar</button>
        <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
        <button className='boton-text' onClick={() => addToLikes(producto)}><FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      </div>
      
    </>
  );
}

export default DetalleProducto;
