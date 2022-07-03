import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";



export default function Checkout() {
    const { cart, getItemQty, emptyCart, getItemPrice } = useContext(CartContext);
    const [order, setOrder] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cel, setCel] = useState("");
    const [orderId, setOrderId] = useState("");
    const [loader, setLoader] = useState(false);

    function handleClick(){
        setName(document.getElementById("name").value);
        setEmail(document.getElementById("email").value);
        setCel(document.getElementById("cel").value);
        setOrder({
             buyer: {name, email, cel},
             items: cart,
             date: new Date(),
             total: getItemPrice()
            }
        );
        
 
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        emptyCart();
        }
  return (<>
            <Container>
                <h3 className="text-center mb-5">{`Su orden tiene ${getItemQty()} productos y un valor de $ ${getItemPrice()}`}</h3>
                <h3 className="text-center">
                  Para enviar el pedido complete los siguientes datos:
                </h3>
                <Row className="justify-content-evenly">
                  <Col
                    sm={6}
                    className="d-flex flex-column border p-5 bg-secondary"
                  >
                    <input id="name"
                      className="mb-2"
                      type={"text"}
                      placeholder={"Ingrese su nombre"}
                    ></input>
                    <input id="email"
                      className="mb-2"
                      type={"email"}
                      placeholder={"Ingrese su email"}
                    ></input>
                    <input id="cel"
                      className="mb-2"
                      type={"text"}
                      placeholder={"Ingrese su celular"}
                    ></input>
                    {orderId == "" ? 
                    <Button
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      Enviar Pedido
                    </Button>
                    : <p className="text-center">{`Su codigo de pedido es ${orderId}`}</p>

                    }
                  </Col>
                </Row>
                </Container>
                </>)
            
}
