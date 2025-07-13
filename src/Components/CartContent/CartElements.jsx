import { useContext } from "react";
import { Context } from "../../Context/Context";

const CartElements = () => {
  const { cart, setCart } = useContext(Context);

    const deleteProducts = (id) => {
    const foundId = cart.find((element) => element.id === id)

    const newCart = cart.filter((element) => {
      return element !== foundId
    })

    setCart(newCart)

  }

  return cart.map((product) => {
    return (
    <div className="product-cart-container" key = {product.id}>
        <img src={product.image} alt="img-card" />
        <h3>{product.title}</h3>
        <h4 className="price">💲 {product.price}</h4>
        <h3 className="cart-delete-product" onClick={() => deleteProducts(product.id)}>
          ❌
        </h3>
        
    </div>
    )
  });


};

export default CartElements;