import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
 const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const llamada = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: '00001', title: "Televisor LCD", price: 200, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00002', title: "Tablet Xiaomi", price: 100, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00003', title: "Celular Pixel", price: 150, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00004', title: "Licuadora", price: 50, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00005', title: "Monopatin", price: 30, pictureUrl: "https://via.placeholder.com/150" },
          { id: '00006', title: "Proyector", price: 600, pictureUrl: "https://via.placeholder.com/150" },
        ]);
      }, 2000);
    });
    llamada
      .then((res) => {setResultados(res);})
      .catch((error) => {console.log(error);})
    }
  , [])
  
  return (
    //<h1 className='greeting'>{greeting}</h1>
    <>
      <ItemList productos={resultados} />
    </>
  )
}

export default ItemListContainer