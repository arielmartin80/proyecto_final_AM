import { useState, useEffect, useContext } from "react"
import { Context } from "../../Context/Context"
import "./products.css"

const Products = () => {

    //const [products, setProducts] = useState([])

    //Cargamos los productos desde el Context
  const {products, setProducts} = useContext(Context)

    const {cart, setCart} = useContext(Context)

     useEffect(() => {
          //fetch('https://fakestoreapi.com/products')
          fetch('https://687030697ca4d06b34b62b2c.mockapi.io/products')
          .then((response)=>response.json())
          .then((data) => setProducts(data))
          .catch(error => console.error('Error:', error));
     }, [])

     const buyProducts = (product) => {
        setCart ([...cart, product])
     }

console.log(products)
    
return products.map((product) => {
      return (
    <div className="card" key={product.id}>
        <img src={product.image} alt="img-product-card" className="mx-auto"/>
        <h5>{product.title}</h5>
        <h3>💲 {product.price}</h3>
        <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
    </div>
  )
})

}

export default Products
