import React from "react";
import { Card, Col } from "react-bootstrap";

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
            <a href="#">Ver detalle</a>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
