import Card from "react-bootstrap/Card";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";



const CardsProducts = ({dataFiltrada}) => {

  return (
      <div style={{overflow:"auto"}}>
      <Row xs={1} md={3}  className="g-4">
        {dataFiltrada.map((item) => (
          <Col key={item.id}>
          <Card  key={item.id} style={{ width: "250px", height:"480px"}}>
            <Card.Img variant="top" src={item.imgUrl} style={{height:"180px",width:"246px",objectFit:"contain"}} />
            <Card.Body>
              <Card.Title style={{height:"30px"}}>{item.Name}</Card.Title>
              <Card.Text style={{overflow:"auto"}}> Descripcion: {item.Description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Lugar de venta: {item.Location}</ListGroup.Item>
              <ListGroup.Item>
                Precio del articulo: ₡{item.Price}
              </ListGroup.Item>
              <ListGroup.Item>Categoria: {item.Category}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
      </div>
    
  );
}

export default CardsProducts;
