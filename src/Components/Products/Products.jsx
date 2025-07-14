import "./products.css";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";


const Products = () => {
  //const [products, setProducts] = useState([])

  //Cargamos los productos desde el Context
  const { products, setProducts } = useContext(Context);

  const { cart, setCart, addToCart } = useContext(Context);

  useEffect(() => {
    //fetch('https://fakestoreapi.com/products')
    fetch("https://687030697ca4d06b34b62b2c.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const buyProducts = (product) => {
    addToCart(product)
    setCart([...cart, product]);
  };

  return products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <h4 className="ProductTitle">{product.title}</h4>
        <img src={product.image} alt="img-product-card" className="mx-auto" />
        <h6>{product.description}</h6>
        <h3><strong className="pesos">💲</strong> <strong className="price">{product.price}</strong></h3>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    );
  });
};

export default Products;
