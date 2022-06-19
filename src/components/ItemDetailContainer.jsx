import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';


export default function ItemDetailContainer({greeting}) {
 const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quasi maiores. Sit mollitia ab eaque fuga omnis quo recusandae dolor.';
 const [loading, setLoading] = useState(true);
 const [producto, setProducto] = useState([]);
 const id = useParams();
  useEffect(() => {
    setProducto([]);
    setLoading(true);
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: '00001', title: "Televisor LCD", category:'electro', description:`Televisor LCD de 50 pulgadas con Android TV. ${lorem}`, price: 200, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00002', title: "Tablet Xiaomi", category:'tecnologia', description:`Tablet Xiaomi de 10 pulgadas con Android 12. ${lorem}`, price: 100, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00003', title: "Celular Pixel", category:'electro', description:`Celular Google Pixel 5. ${lorem}`, price: 150, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00004', title: "Licuadora", category:'electro', description:`Licuadora de 5 velocidades y 2 litros de capacidad. ${lorem}`, price: 50, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00005', title: "Monopatin", category:'movilidad', description:`Monopatin electrico con 100 km de autonomia. ${lorem}`, price: 30, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00007', title: "Proyector", category:'tecnologia', description:`Proyector Laser Samsung ultima generación. ${lorem}`, price: 600, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00008', title: "Cafetera Nesspresso", category:'electro', description:`Cafetera Nesspresso apta para cartuchos. ${lorem}`, price:100 , pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00009', title: "Laptop Lenovo E14", category:'tecnologia', description:`Laptop Lenovo E14 2nd gen de 15.6 pulgadas. ${lorem}`, price: 500 , pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00010', title: "Segway Urbano", category:'movilidad', description:`Segway para movilidad urbana. ${lorem}`, price: 400 , pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00011', title: "Heladera GAFA", category:'electro', description:`Heladera de 200L de capacidad con Freezer. ${lorem}`, price: 300 , pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00012', title: "Tostadora B&D", category:'electro', description:`Tostadora Black and Decker de 4 panes. ${lorem}`, price: 50, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
          { id: '00013', title: "Headphones Wireless", category:'tecnologia', description:`Auriculares sin cable bluetooth. ${lorem}`, price: 30, pictureUrl: "https://via.placeholder.com/400", stock: 10 },
        ].find(item => item.id == id.id));
      }, 2000);
    });
    getItem
      .then((res) => {setProducto(res);})
      .catch((error) => {console.log(error);})
      .finally(() => {setLoading(false)})
    }
  , [id])
  
  return (
    <>
      <div>{loading && <Container><Row><Col className= "d-flex justify-content-center"><Spinner animation="grow" /></Col></Row></Container>}</div>
      {producto != [] ? <ItemDetail producto={producto} loading={loading} /> : ""}
    </>
  )
}