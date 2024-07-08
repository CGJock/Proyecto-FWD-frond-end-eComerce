// import { useEffect } from "react";
// import { getItems } from "../services/getProducts";
// import delProducts from "../services/delProducts";
import { useState } from "react";
import SelectorCategoria from "./Selector-categoria";
import SelectorProvincia from "./Selector-provincia";

const AdminTable = ({
  Data,
  setDescription,
  Description,
}
) => {
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
              <td>
                {producto.Category}
                <SelectorCategoria
                categoriaobj={categoriaobj}
                Category={Category}
                setCategory={setCategory}
                 />
              </td>
              <td>
                {producto.Location}
                <SelectorProvincia
                provinciaobj={provinciaobj}
                Location={Location}
                setLocation={setLocation}
                />
              </td>
              <td>
                <img
                  src={producto.imgUrl}
                  style={{ height: "100px", width: "120px" }}
                  alt={producto.Name}
                />
              </td>
              <td>
                <button key={producto.id}>Editar</button>
              </td>
              <td>
                <button>borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminTable;
