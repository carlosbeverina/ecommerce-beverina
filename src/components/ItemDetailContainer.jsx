import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemDetailContainer({greeting}) {
 const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quasi maiores. Sit mollitia ab eaque fuga omnis quo recusandae dolor.';
 const [loading, setLoading] = useState(true);
 const [producto, setProducto] = useState([]);
 const id = useParams();
  useEffect(() => {
    setProducto([]);
    setLoading(true);
    const db = getFirestore();
    const q = doc(db, "items", id.id);
    getDoc(q).then((snapshot) => {
      if (snapshot.exists()){
        setProducto({id: snapshot.id, ...snapshot.data()})
      }
    })
    .catch((error) => {console.log(error);})
    .finally(() => {setLoading(false)})
    }
   
  , [id]);

  return (
    <>
      <div>{loading && <Container><Row><Col className= "d-flex justify-content-center"><Spinner animation="grow" /></Col></Row></Container>}</div>
      {producto != [] ? <ItemDetail producto={producto} loading={loading} /> : ""}
    </>
  )
}