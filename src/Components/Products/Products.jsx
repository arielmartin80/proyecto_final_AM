import { useState, useEffect, useContext } from "react"
import { Context } from "../../Context/Context"
import "./products.css"

const Products = () => {

    const [products, setProducts] = useState([])

    const {cart, setCart} = useContext(Context)

     useEffect(() => {
          fetch('https://api.escuelajs.co/api/v1/products')
          .then((response)=>response.json())
          .then((data) => setProducts(data))
          .catch(error => console.error('Error:', error));
     }, [])

     const buyProducts = (product) => {
        setCart ([...cart, product])
     }

console.log(cart)
    
return products.map((product) => {
      return (
    <div className="card" key={product.id}>
        <img src={product.images[0]} alt="img-product-card" />
        <h3>{product.title}</h3>
        <h4>💲 {product.price}</h4>
        <button onClick={() => buyProducts(product)}>Buy</button>
    </div>
  )
})

}

export default Products
