import React, { useState } from 'react';
import "./app.css" 
import { Container, Accordion, Card, ListGroup, Row, Col, Button, Carousel } from 'react-bootstrap';
import { foodOptions } from './utils/options'; // Ajusta la ruta según sea necesario
import { CartItem } from './utils/components.dto';
import { useCart } from './components/CartProvider';
import Cart from './components/Cart';
import { FaShoppingCart } from 'react-icons/fa';
import p1 from "./assets/pizzeria1.png"
import p2 from "./assets/p2.png"
import p3 from "./assets/p3.png"
import SocialMediaSection from './components/SocialMediaSection';
const App: React.FC = () => {
  const { addToCart, cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);
 
   // Determinar el color del ícono según si hay artículos en el carrito
   const hasItems = cartItems.length > 0;
   const iconColor = hasItems ? 'red' : 'blue'; // Cambia de rojo a azul

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    // Crear un nuevo ítem con la propiedad quantity
    const cartItem: CartItem = { ...item, quantity: 1 };
    addToCart(cartItem);
  };
  
  return (
    <Container className="my-4 bg-all">
     <section className="position-relative mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={p1}
              alt={p1}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={p2}
              alt="Imagen 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={p3}
              alt="Imagen 3"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="text-center mb-4 texto position-absolute top-50 start-50 translate-middle text-white">Pizzería El Tito</h1>
      </section>
      <SocialMediaSection />
    <section className="mb-4 ">
      <Card className="text-center primario">
        <Card.Body>
       
          <Card.Text>
            <strong>Horario:</strong> Lunes a Domingo, de 10:00 AM a 10:00 PM
          </Card.Text>
        
        </Card.Body>
      </Card>
    </section>
    
    <Accordion defaultActiveKey="0" alwaysOpen={false} >
      {foodOptions.map((food, index) => (
        <Accordion.Item eventKey={`${index}`} key={index}  className='iconBorder  '  >
          <Accordion.Header as={Card.Header} eventKey={String(index)}   >
            {food.type}
          </Accordion.Header>
          <Accordion.Body      >
            <ListGroup variant="flush"     >
              {food.items.map((item) => (
                <ListGroup.Item    
                 key={item.id}
                    >
                  <Row >
                    <Col xs={3} >
                      <img src={item.img} alt={item.name} className="img-fluid rounded" />
                    </Col>
                    <Col xs={6}>
                      <h5>{item.name}</h5>
                      <p>{item.ingredients}</p>
                      <p className="text-muted">{item.price}</p>
                    </Col>
                    <Col xs={3} className="d-flex align-items-center">
                      <Button
                        variant="primary"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    
    <Button
      variant="primary"
      onClick={() => setShowCart(true)}
      className="fixed-bottom left-0 mb-4 me-3"
      style={{ zIndex: 1000, width: 50, height: 40, backgroundColor: iconColor, borderColor: iconColor }}
    >
      <FaShoppingCart style={{ color: 'white' }} />
    </Button>
    
    <Cart show={showCart} onHide={() => setShowCart(false)} />
  </Container>
  );
};

export default App;
