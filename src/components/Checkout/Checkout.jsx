import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, getItemQty, emptyCart, getItemPrice } = useContext(CartContext);
  let order = {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    if (name.length <= 3 || email.length <= 3 || isNaN(parseInt(cel))) {
      alert("Por favor verifique los datos ingresados");
      return;
    }
    order = {
      buyer: { name, email, cel },
      items: cart,
      date: new Date(),
      total: getItemPrice(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderId(id))
      .then(emptyCart());
  }

  return (
    <Container>
      <Row className="justify-content-evenly d-flex">
        {orderId == "" ? (
          <>
            <Col
              sm={6}
              className="d-flex flex-column border p-5 bg-secondary justify-content-center"
            >
              <h4 className="text-center">
                Para enviar el pedido complete los siguientes datos:
              </h4>
              <input
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="mb-2"
                type={"text"}
                placeholder={"Ingrese su nombre"}
              ></input>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="mb-2"
                type={"email"}
                placeholder={"Ingrese su email"}
              ></input>
              <input
                onChange={(e) => setCel(e.target.value)}
                id="cel"
                className="mb-2"
                type={"text"}
                placeholder={"Ingrese su celular"}
              ></input>

              <Button
                onClick={() => {
                  handleClick();
                }}
              >
                Enviar Pedido
              </Button>
            </Col>
            <Col sm={6} className="d-flex border p-3">
              {cart.map((producto) => (
                <>
                  <Col className="d-flex">
                    <Col sm={3}>
                      <Image
                        fluid
                        className="w-50"
                        src={`${producto.pictureUrl}150`}
                      ></Image>
                    </Col>
                    <Col sm={5}>
                      <h5 className="mb-3">{producto.title}</h5>
                      <p className="mb-0">Precio: {producto.price}</p>
                      <p>Cantidad: {producto.cant}</p>
                    </Col>
                    <Col sm={3}>
                      <h5>Subtotal: {producto.price * producto.cant}</h5>
                    </Col>
                  </Col>
                </>
              ))}
            </Col>
            <h3 className="text-center mt-3">
              El total a pagar es: $ {getItemPrice()}
            </h3>
          </>
        ) : (
          <>
            <Col className="d-flex flex-column">
              <h1 className="text-center">{`Su codigo de pedido es:`}</h1>
              <h2 className="text-center mb-5">{orderId}</h2>
              <Link className="align-self-center" to={"/"}>
                <Button>Continuar comprando</Button>
              </Link>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
