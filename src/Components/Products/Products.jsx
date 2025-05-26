import { useState, useEffect } from "react"
import "./products.css"

const Products = () => {

    const [products, setProducts] = useState([])

     useEffect(() => {
          fetch('https://fakestoreapi.com/products')
          .then((response)=>response.json())
          .then((data) => setProducts(data))
          .catch(error => console.error('Error:', error));
     }, [])

console.log(products)
    
return products.map((product) => {
      return (
    <div className="card" key={product.id}>
        <img src={product.image} alt="img-product-card" />
        <h3 className="title">{product.title}</h3>
        <h2> 💲<strong className="price">{product.price}</strong></h2>
        <button>Buy</button>
    </div>
  )
})

}

export default Products
