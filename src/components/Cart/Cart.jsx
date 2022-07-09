import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import CartItem from "./CartItem";

export default function Cart({checkout}) {
  const { cart, setCart, emptyCart, deleteItem, getItemPrice } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("checkout",checkout);
  return (
    <>
      {cart.length == 0 ? (
        <Container fluid>
          <Row>
            <Col className="banner">
              <h1>No tienes nada agregado al carrito.</h1>
              <Link to={"/"}>
                <Button>Regresar al Inicio</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <div className="cart-detail">
            <Container className="border border-primary rounded pt-3 pb-3">
              <Row className="border rounded pb-3 me-5 ms-5">
                <Col sm={8} className="text-center fw-bold">
                  Producto
                </Col>
                <Col sm={3} className='fw-bold'>Subtotal</Col>
                <Col sm={1}></Col>
              </Row>
              {cart.map((x) => (
                <CartItem producto={x} />
              ))}
            </Container>
            <Container className="border border-primary rounded pt-3 pb-3">
              <Row className="border rounded pb-3 me-5 ms-5 flex-column align-items-center">
                <Col>
                <h3 className="text-center">El total a pagar es: $ {getItemPrice()}</h3>
                </Col>
                {!checkout &&
                <Col className="d-flex justify-content-center mt-3">
                  <Button variant="success" className="me-3" onClick={() => navigate("/checkout", { replace: true })}>Finalizar Compra</Button>
                  <Button variant="outline-danger" onClick={() => emptyCart()}>Vaciar Carrito</Button>
                </Col>
                }
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
}
