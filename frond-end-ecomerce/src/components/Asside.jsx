import React from 'react';
import Form from 'react-bootstrap/Form';
import { getProducts } from '../services/getProducts'

const Selector = () => {
    async function getItems() {
    const datos = await getProducts()
    return (
    <div>
     <ul>
     {datos.map((item, index) => <li key={index}>{item}</li>)}  
     <button onClick={getItems}>mostrar elementos</button> 
     </ul>
    </div>
  )
}
}

export default Selector


