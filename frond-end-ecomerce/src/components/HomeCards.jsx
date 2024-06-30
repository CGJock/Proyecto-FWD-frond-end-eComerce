import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { getProducts } from '../services/getProducts';

function KitchenSinkExample() {
    const [datos, setDatos] = useState([]);
    async function getItems() {
    const datos = await getProducts()
    setDatos(datos)
    }
  return (
    <>
    <button onClick={getItems}>Mostrar Productos</button>
    {datos.map((item) =>
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

export default KitchenSinkExample;