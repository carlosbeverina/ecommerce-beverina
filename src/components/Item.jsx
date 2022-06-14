import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  return (
    <>
      <Col>
        <Card id={producto.id} style={{ width: "10rem" }} data-testid="product-card">
          <Card.Img variant="top" src={producto.pictureUrl} />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>${producto.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={'item/'+ producto.id}>Detalle</Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
