import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

import { useEffect } from 'react';
const apiUrl = "http://localhost:3001/items";



function CardsProducts() {
   const [Data,setData] = useState([])
useEffect(() =>{
    const getProducts  = async() => {
      try{
        
        const response = await fetch(apiUrl);
        const data = await response.json()
        setData(data)
        
        
      } catch(error){
        alert("error en el servidor")
      }
      
    }
    getProducts()
  },[]
  )
  return (
    <>
    
    {Data.map((item) =>
    <Card key={item.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgUrl} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Lugar de venta {item.location}</ListGroup.Item>
        <ListGroup.Item>Precioi del articulo {item.price}</ListGroup.Item>
        <ListGroup.Item>Categoria {item.category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    )} 
    </>
  );
}

export default CardsProducts;