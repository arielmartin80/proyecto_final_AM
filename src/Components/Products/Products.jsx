import { useState, useEffect } from "react"
import "./products.css"

const Products = () => {

    const [products, setProducts] = useState([])

     useEffect(() => {
          fetch('https://api.escuelajs.co/api/v1/products')
          .then((response)=>response.json())
          .then((data) => setProducts(data))
          .catch(error => console.error('Error:', error));
     }, [])

console.log(products)
    
return products.map((product) => {
      return (
    <div className="card" key={product.id}>
        <img src={product.images[0]} alt="img-product-card" />
        <h3>{product.title}</h3>
        <h4>💲 {product.price}</h4>
        <button>Buy</button>
    </div>
  )
})

}

export default Products
