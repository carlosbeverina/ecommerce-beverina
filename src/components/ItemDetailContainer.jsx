import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail';


export default function ItemDetailContainer({greeting}) {
 const [producto, setProducto] = useState([]);

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: '00001',category:'Electro', title: "Televisor LCD", description:'Televisor LCD de 50 pulgadas con Android TV. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod, eius iusto odio doloribus sequi itaque corrupti officiis ducimus amet.', price: 200, pictureUrl: "https://via.placeholder.com/400" },
        ]);
      }, 2000);
    });
    getItem
      .then((res) => {setProducto(res[0]);})
      .catch((error) => {console.log(error);})
    }
  , [])
  
  return (
    <>
      <ItemDetail producto={producto} />
    </>
  )
}