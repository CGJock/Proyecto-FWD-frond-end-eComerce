import React from 'react';
import { useState } from 'react';
import { getProducts } from '../services/getProducts'

const Selector = () => {
    const [datos, setDatos] = useState([]);
    async function getItems() {
    const datos = await getProducts()
    setDatos(datos)
    }
    return (
    <>
        <button onClick={getItems}>mostrar elementos</button> 
     
     {datos.map((item) =>
        <div key={item.id}>
        <p >articulo: {item.name}</p>
        <p>descripcion:{item.description}</p>
        <p>precio: {item.price}</p>
        <img src={item.imgUrl} alt={item.imgUrl} width="100"/>
        <p>location: {item.location}</p>
        </div>
     )} 

    </>
  )
}


export default Selector


