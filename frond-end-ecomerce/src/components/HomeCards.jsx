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
          gap: "10px",
          columnGap: "50px",
          marginLeft: "550px",
        }}
      >
        {dataFiltrada.map((item) => (
          <Card key={item.id} style={{ width: "14rem" }}>
            <Card.Img variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
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
