import { useRef, useState } from "react";
import ModalAdmin from "../Admin-UI/Modal";
import '../../styles/table.css'

const AdminTable = ({
  Data,
  setDescription,
  Description,
  delItems,
  mostrarElementos,
  Show,
  editarItems,
  datosEdit
  // show,
  // handleClose,
  // handleShow,
}) => {
  const [Category, setCategory] = useState("");
  const categoriaobj = {
    //objecto que se pasa como prop para setear la categoria
    Electrodomesticos: "electrodomesticos",
    Herramientas: "herramientas",
    Muebles: "muebles",
    Vestimenta: "vestimenta",
    LineaBlanca: "lineaBlanca",
    Celulares: "celulares",
    Juguetes: "juguetes",
    Libros: "libros",
  };

  const [Location, setLocation] = useState("");
  const provinciaobj = {
    //objecto que setea el lugar de venta
    Alajuela: "alajuela",
    Cartago: "cartago",
    Guanacaste: "guanacaste",
    Heredia: "heredia",
    SanJose: "sanjose",
    Limon: "limon",
    Puntarenas: "puntarenas",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productosProps, setproductosProps] = useState([]);
  const [nombre, setnombre] = useState("");

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>descripcion</th>
            <th>precio</th>
            <th>categoria</th>
            <th>punto venta</th>
            <th>imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Data.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.Name}</td>
              <td>
                {producto.Description}
                <textarea
                  value={Description}
                  style={{ display: "none" }}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </td>
              <td>{producto.Price}</td>
              <td>{producto.Category}</td>
              <td>{producto.Location}</td>
              <td>
                <img
                  src={producto.imgUrl}
                  style={{ height: "100px", width: "120px" }}
                  alt={producto.Name}
                />
              </td>
              <td>
                <button className="editarBtn"
                  onClick={() => {
                    setShow(!show);
                    console.log(producto);
                    setproductosProps(producto);
                    setnombre(producto.Name);
                  }}
                >
                  Editar
                </button>
              </td>
              <td>
                <button className="eliminarBtn" onClick={() => delItems(producto.id)}>Eliminar</button>
                {/* Se llama una funcion de callback si se llama de manera normal, sera el resultado de la 
                funcion y se enciclara /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalAdmin
        Show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        provinciaobj={provinciaobj}
        Location={location}
        setLocation={setLocation}
        Category={Category}
        setCategory={setCategory}
        categoriaobj={categoriaobj}
        Producto={productosProps}
        nombre={nombre}
        editarItems={editarItems}
        datosEdit={datosEdit}
      />
    </>
  );
};

export default AdminTable;
