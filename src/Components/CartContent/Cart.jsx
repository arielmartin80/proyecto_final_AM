import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Context } from '../../Context/Context'

const Carrito = () => {
  const { cart, setCart } = useContext(Context);

  console.log(cart)

  const eliminarDelCarrito = (id) => {
    setCart(prev => prev.filter(producto => producto.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Container className="mt-4">
        <h3 className='row h-100 justify-content-center align-items-center'>Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Imagen</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Sub-Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className='text-center'>
                {item.image?.startsWith('http') ? (
                  <img src={item.image} alt={item.title} width={50} />
                ) : (
                  <span>{item.image}</span>
                )}
              </td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(Number(item.price) * item.quantity).toFixed(2)}</td>
              <td className='text-center'>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
    </Container>
  );
};

export default Carrito;
