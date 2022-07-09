import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';
import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState([]);
 
 const cat = useParams();


 useEffect(() => {
    setResultados([]);
    setLoading(true);
    const db = getFirestore();
        if (cat.cat == undefined) {
          const itemsCollection = collection(db, "items");
          getDocs(itemsCollection).then((snapshot) => {
            if (snapshot.size === 0){
              console.log('No Results');
            }
            setResultados(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))); 
          })
          .catch((error) => {console.log(error);})
          .finally(() => {setLoading(false)})
        } else {
          const q = query(collection(db, "items"), where("category","==", cat.cat));
          getDocs(q).then((snapshot) => {
            if (snapshot.size === 0){
              console.log('No Results');
            }
            setResultados(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))); 
          })
          .catch((error) => {console.log(error);})
          .finally(() => {setLoading(false)});
        }
      }
    , [cat]);
  return (
    <>
      <div>{loading && <Container><Row><Col className= "d-flex justify-content-center"><Spinner animation="grow" /></Col></Row></Container>}</div>
        {resultados != [] && <ItemList productos={ resultados } />}
    
    </>
  )
}