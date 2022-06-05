import React from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

export default function ItemList({ productos }) {
  return (
    <>
      <Container>
        <Row className="d-flex flex-row">
          {productos?.map((producto) => (
            <Item producto={producto} />
          ))}
        </Row>
      </Container>
    </>
  );
}
