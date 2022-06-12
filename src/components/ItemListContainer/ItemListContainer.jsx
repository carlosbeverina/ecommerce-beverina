import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import './ItemListContainer.css'

export default function ItemListContainer({greeting}) {
 const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const llamada = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: '00001', title: "Televisor LCD", category:'electro', description:'Televisor LCD de 50 pulgadas con Android TV', price: 200, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00002', title: "Tablet Xiaomi", category:'tecnologia', description:'Televisor LCD de 50 pulgadas con Android TV', price: 100, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00003', title: "Celular Pixel", category:'electro', description:'Televisor LCD de 50 pulgadas con Android TV', price: 150, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00004', title: "Licuadora", category:'electro', description:'Televisor LCD de 50 pulgadas con Android TV', price: 50, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00005', title: "Monopatin", category:'movilidad', description:'Televisor LCD de 50 pulgadas con Android TV', price: 30, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00006', title: "Proyector", category:'tecnologia', description:'Televisor LCD de 50 pulgadas con Android TV', price: 600, pictureUrl: "https://via.placeholder.com/150" },
        ]);
      }, 2000);
    });
    llamada
      .then((res) => {setResultados(res);})
      .catch((error) => {console.log(error);})
    }
  , [])
  
  return (
    <>
    <h1 className='greeting'>{greeting}</h1>
      <ItemList productos={resultados} />
    </>
  )
}