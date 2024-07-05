import { useState } from "react";
import { getItems } from "../services/getProducts";
import postProducts from "../services/PostProducts";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css"
import { useEffect } from "react";
import styles from '../styles/table.module.css'
import putProducts from "../services/putProducts";
import delProducts from "../services/delProducts";

const AdminForm = () => {
  let Electrodomesticos = "electrodomesticos";
  let Herramientas = "herramientas";
  let Muebles = "muebles";
  let Vestimenta = "vestimenta";
  let LineaBlanca = "lineaBlanca";
  let Celulares = "celulares";
  let Juguetes = "juguetes";
  let Libros = "libros";
  const [Category, setCategory] = useState("");

  const [Location, setLocation] = useState("");
  let Alajuela = "alajuela";
  let Cartago = "cartago";
  let Guanacaste = "guanacaste";
  let Heredia = "heredia";
  let SanJose = "sanjose";
  let Limon = "limon";
  let Puntarenas = "puntarenas";
  const [Price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Data,setData] = ([])
  const [SelectLocationVisb,setSelectLocationVisb] = useState(false)
  const [SelectCatVisib , setSelectCatVisib ] = useState(false)
  
  
  function setVisibility() {
    if (!SelectLocationVisb) {
      setSelectLocationVisb(true)
      setSelectCatVisib(true)
    }
    
   
  }
  async function getData() {
    const items = await getItems();
    setData(items);
  }

  async function getAllItems() {
    postProducts(Name, Description, Price, Category, Location, imageUrl);
    getData();
  }
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
    {
      imageUrl && (
        <img
          className="imgPost"
          src={imageUrl}//bloque de codigo que permite visualizar una imagen a la hora de subirla
          alt="Imagen"
        />
      );
    }
  };
  useEffect(
    () => {
      console.log("mostra la oster");
      getData();
    },
    [],
  );


async function insertProducts() {
  

    if (!Name || !Description || !Price || !Category || !Location || !imageUrl) {
     return alert("debes rellenar todos los campos")
    } else{
      
    // putProducts(Name, Description, Price, Category, Location, imageUrl)
  }




}


  return (
    <>
      <table className={styles.table}>
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
      {Data.map((item) => (
        
       
          <tr key={item.id} style={{border: "solid black 2px"}}>
            <td>{item.name}</td>
            <td>
              {item.description}
              <textarea
                value={Description} style={{display:"none"}}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </td>
            <td>{item.price}</td>
            <td>
              {item.Category}
              <select key={item.id

              } style={{display: SelectCatVisib ? "block" : "none"}}
                value={Category}
                onChange={(event) => setCategory(event.target.value)}
                name="products"
                id="selectorCateg"
              >
                <option value={Electrodomesticos}>Electrodomesticos</option>
                <option value={Herramientas}>Herramientas</option>
                <option value={Muebles}>Muebles</option>
                <option value={Vestimenta}>Vestimenta</option>
                <option value={LineaBlanca}>LineaBlanca</option>
                <option value={Celulares}>Celulares</option>
                <option value={Juguetes}>Juguetes</option>
                <option value={Libros}>Libros</option>
              </select>
            </td>
            <td>
              {item.location}
              <select style={{display: SelectLocationVisb ? "block" : "none"}}
                value={Location}
                onChange={(event) => setLocation(event.target.value)}
                name="puntoventa"
                id="puntoventa"
              >
                <option value={Alajuela}>Alajuela</option>
                <option value={Cartago}>Cartago</option>
                <option value={Guanacaste}>Guanacaste</option>
                <option value={Heredia}>Heredia</option>
                <option value={SanJose}>SanJose</option>
                <option value={Limon}>Limon</option>
                <option value={Puntarenas}>Puntarenas</option>
              </select>
            </td>
            <td>
              <img
                src={item.imgUrl}
                style={{ height: "100px", width: "120px" }}
                alt={item.name}
              />
            </td>
            <td>
              <button key={item.id} onClick={setVisibility}>Editar</button>
            </td>
            <td>
              <button onClick={() => delProducts(item.id)}>borrar</button>
            </td>
          </tr>
        
      ))}
        </tbody>
        </table>
    </>
  );
};

export default AdminForm;
