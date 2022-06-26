import { useContext } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ producto }) {
  const { deleteItem } = useContext(CartContext);
  return (
    <Row className="ps-3 pe-3 ms-5 me-5 pt-1 pb-1 border rounded align-items-center">
      <Col sm={3}>
        <Image fluid className="w-50" src={producto.pictureUrl}></Image>
      </Col>
      <Col sm={5}>
        <h5 className="mb-3">{producto.title}</h5>
        <p className="mb-0">Precio: {producto.price}</p>
        <p>Cantidad: {producto.cant}</p>
      </Col>
      <Col sm={3}>
        <h5>Subtotal: {producto.price * producto.cant}</h5>
      </Col>
      <Col sm={1}>
        <Button variant="danger" onClick={()=>deleteItem(producto.id)}>X</Button>
      </Col>
    </Row>
  );
}
