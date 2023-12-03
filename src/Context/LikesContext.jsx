import React, { createContext, useContext, useState } from 'react';

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [mostrarLikes, setMostrarLikes] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const addToLikes = (product) => {
    setLikedProducts((prevLikedProducts) => {
      if (prevLikedProducts.some((p) => p.id === product.id)) {
        // Si el producto ya está en la lista de favoritos, no hacemos nada
        return prevLikedProducts;
      }

      // Agregamos el nuevo producto a la lista de favoritos
      return [...prevLikedProducts, product];
    });

    setMostrarLikes(true);
    setMostrarMenu(true);
  };

  const removeFromLikes = (productId) => {
    setLikedProducts((prevLikedProducts) => {
      // Filtramos los productos que no coinciden con el ID proporcionado
      return prevLikedProducts.filter((product) => product.id !== productId);
    });
  };

  const clearLikes = () => {
    setLikedProducts([]);
  };

  return (
    <LikesContext.Provider value={{ likedProducts, addToLikes, removeFromLikes, clearLikes , mostrarLikes , setMostrarLikes }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => useContext(LikesContext);
