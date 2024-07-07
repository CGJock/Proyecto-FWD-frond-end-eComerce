import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


const CardsProducts = ({dataFiltrada}) => {

  return (
    <>
      <div
        style={{
          display: "grid",
          height: "500px",
          gridTemplateColumns: "200px 200px 200px",
          rowGap:"30px",
          columnGap: "60px",
          marginLeft: "60px",
        }}
      >
        {dataFiltrada.map((item) => (
          <Card key={item.id} style={{ width: "250px", height:"480px"}}>
            <Card.Img variant="top" src={item.imgUrl} style={{height:"180px",width:"246px",objectFit:"contain"}} />
            <Card.Body>
              <Card.Title style={{height:"30px"}}>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Lugar de venta: {item.location}</ListGroup.Item>
              <ListGroup.Item>
                Precio del articulo: ₡{item.price}
              </ListGroup.Item>
              <ListGroup.Item>Categoria: {item.category}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default CardsProducts;
