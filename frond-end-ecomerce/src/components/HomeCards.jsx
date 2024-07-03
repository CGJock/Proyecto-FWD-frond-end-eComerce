import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { useEffect } from "react";

const apiUrl = "http://localhost:3001/items";

function CardsProducts() {
  
  const [Data, setData] = useState([]); //se inicia el contenido de la data como un array vacio
  useEffect(
    () => {
      //useEffect hara que la data se ejecute al ver los cambios
      const getProducts = async () => {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setData(data);
        } catch (error) {
          alert("error en el servidor");
        }
      };
      getProducts();
    },
    [] //pero se setea como un array vacion para evitar el enciclamiento
  );
  
  return (
    <>
      <div
        style={{
          display: "grid",
          height: "500px",
          gridTemplateColumns: "200px 200px 200px",
          gap: "10px",
          columnGap: "50px",
          marginLeft:"550px"
        }}
      >
        {Data.map((item) => (
          <Card key={item.id} style={{ width: "14rem"}}>
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
