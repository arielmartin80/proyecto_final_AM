import { createContext , useState } from "react";

export const Context = createContext([]);

const ContextProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  return (
  <Context.Provider value={{products, setProducts, cart, setCart}}>
    {children}
  </Context.Provider>
  )
};

export default ContextProvider

