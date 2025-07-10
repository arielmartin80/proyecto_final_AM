import {useContext} from "react"
import { Context } from "../../Context/Context"

const CartTotal = () => {

    const {cart} = useContext(Context)

    const total = cart.reduce((acc, el)=> acc + el.price * 1, 0)

  return (
    <div className="cartTotal">
      <h3>Total a Pagar: {total}</h3>
    </div>
  )
}

export default CartTotal