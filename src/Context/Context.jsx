import React, { createContext, useState } from 'react';

// Crear el contexto
export const Context = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (productCart) => {
    setCart((prevCart) => {
      const existe = prevCart.find(item => item.id === productCart.id);
      if (existe) {
        // Si ya existe, aumentar la cantidad
        return prevCart.map(item =>
          item.id === productCart.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Si no existe, agregarlo con cantidad 1
      return [...prevCart, { ...productCart, quantity: 1 }];
    });
  };

  // Eliminar producto por ID
  const delFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Vaciar el carrito (opcional)
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        delFromCart,
        emptyCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartProvider


