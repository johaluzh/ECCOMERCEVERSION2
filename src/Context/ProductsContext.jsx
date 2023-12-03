import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            try {
              // Puedes ajustar la ruta del archivo JSON según tu estructura de archivos.
              const response = await fetch('/public/productos.json');
              const data = await response.json();
              setProductos(data.productos);
            } catch (error) {
              console.error('Error al cargar los productos', error);
            }
          };
      
          fetchData();
        }, []);
      
        return (
          <ProductContext.Provider value={productos}>
            {children}
          </ProductContext.Provider>
        );
      };
      
      export const useProductContext = () => useContext(ProductContext);
