import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./ItemDetail.css";

export default function ItemDetail({ producto }) {
  return (
    <>
      <Container>
        <Row className="d-flex flex-row">
          <Col>
            <Image src={producto.pictureUrl} />
          </Col>
          <Col>
            <h1 className="titulo">{producto.title}</h1>
            <h2 className="precio">Precio: ${producto.price}</h2>
            <p className="descripcion">{producto.description}</p>
            <Button variant="primary">Comprar</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
