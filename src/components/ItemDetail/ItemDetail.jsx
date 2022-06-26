import React, { useContext } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ producto, loading }) {
  const [visItemCount, setVisItemCount] = useState(true);
  const [cant, setCant] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = () => {
    
    alert(`Agregaste ${cant} items al carrito`)
    setVisItemCount(false);
    addItem(producto, cant);
  };

  return (
    <>
      {!loading && (
        <Container>
          <Row className="d-flex flex-row">
            <Col>
              <Image src={producto.pictureUrl} />
            </Col>
            <Col className="d-flex flex-column">
              <h1 className="titulo">{producto.title}</h1>
              <h2 className="precio">Precio: ${producto.price}</h2>
              <p className="descripcion">{producto.description}</p>
              {visItemCount && (
                <ItemCount
                  initial={1}
                  stock={producto.stock}
                  onAdd={onAdd}
                  setCant={setCant}
                  cant = {cant}
                />
              )}
              { !visItemCount &&
              <Link className="align-self-center mt-4" to={"../cart"}>
                <Button variant="primary" onClick={() => {}}>
                  Terminar Compra
                </Button>
              </Link>}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
