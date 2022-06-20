import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function ItemCount({ initial, stock, onAdd, cant, setCant }) {
  
  const agregar = () => {
    if (cant < stock) {
      setCant(cant + 1);
    } else {
      alert("No se pueden agregar mas productos.");
    }
  };

  const sacar = () => {
    if (cant > initial) {
      setCant(cant - 1);
    } else {
      alert("No se pueden sacar mas productos.");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center ">
            <Button variant="secondary" onClick={sacar}>
              -
            </Button>

            <h2 className="contador m-5">{cant}</h2>
            <Button variant="secondary" className="" onClick={agregar}>
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-2">
            <div>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  onAdd();
                }}
              >
                Agregar al carrito
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
