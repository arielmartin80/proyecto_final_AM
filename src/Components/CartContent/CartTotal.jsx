import {useContext} from "react"
import { Context } from "../../Context/Context"

const CartTotal = () => {

    const {cart} = useContext(Context)

    const total = cart.reduce((acc, el)=> acc + el.price * 1, 0)

  return (
    <div className="cartTotal">
      <h2>Total a Pagar: 💲 <strong className="price">{total}</strong></h2>
    </div>
  )
}

export default CartTotal