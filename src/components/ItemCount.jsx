import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

export default function ItemCount({ initial, stock, onAdd, prodId }) {
  const [count, setCount] = useState(initial);

  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No se pueden agregar mas productos.");
    }
  };

  const sacar = () => {
    if (count > initial) {
      setCount(count - 1);
    } else {
      alert("No se pueden sacar mas productos.");
    }
  };

  const reset = () => {
    setCount(initial);
  }

  return (
    <>
      <Container>
          <Row>
          <Col className="d-flex justify-content-center ">
              <Button variant= "secondary" className="" onClick={agregar}>+</Button>
              <h2 className="contador m-5">{count}</h2>
              <Button variant="secondary" onClick={sacar}>-</Button>
          </Col>
          </Row>
          <Row>
          <Col className="d-flex justify-content-center mt-2">
            <div>
              <Button variant="outline-secondary" onClick={() => {onAdd(count, prodId); reset()}}>Agregar al carrito</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

