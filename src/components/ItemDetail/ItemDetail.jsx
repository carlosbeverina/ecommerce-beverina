import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ producto, loading }) {
  const [visItemCount, setVisItemCount] = useState(true);
  const [cant, setCant] = useState();

  const onAdd = (count, prodId) => {
    alert(`Agregaste ${count} del id: ${prodId} al carrito`);
    setCant(cant + count);
    setVisItemCount(false);
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
                  prodId={producto.id}
                />
              )}

              <Link className="align-self-center mt-4" to={"../cart"}>
                <Button variant="primary" onClick={() => {}}>
                  Finalizar Compra
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
