// Cart.tsx
import React from 'react';
import { Modal, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { CartItem } from '../utils/components.dto';
import { useCart } from './CartProvider';
  
const Cart: React.FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => {
  const { cartItems, removeFromCart } = useCart();

    // Formatea el contenido del carrito como un mensaje de texto
    const formatCartContent = () => {
      return cartItems.map(item => (
        `${item.name} (${item.quantity} x ${item.price})`
      )).join('\n');
    };
  
    // Enlace para enviar el contenido del carrito a WhatsApp
    const createWhatsAppLink = () => {
      const cartContent = encodeURIComponent(formatCartContent());
      const phoneNumber = '+543388675439'; // Reemplaza con el número de WhatsApp
      return `https://wa.me/${phoneNumber}?text=${cartContent}`;
    };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {cartItems.length === 0 ? (
            <ListGroup.Item>No items in the cart</ListGroup.Item>
          ) : (
            cartItems.map((item: CartItem) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col xs={3}>
                    <img src={item.img} alt={item.name} className="img-fluid rounded" />
                  </Col>
                  <Col xs={6}>
                    <h5>{item.name}</h5>
                     <p className="text-muted">{item.price}</p>
                    <p className="text-muted">Quantity: {item.quantity}</p>
                  </Col>
                  <Col xs={3} className="d-flex align-items-center">
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          href={createWhatsAppLink()} // Enlace para enviar el contenido del carrito
          target="_blank" // Abre en una nueva pestaña
        >
          Pedir
        </Button>
      </Modal.Footer>
     
     
    </Modal>
  );
};

export default Cart;
