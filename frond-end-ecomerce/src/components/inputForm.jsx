import postProducts from "../services/PostProducts";
import { getItems } from "../services/getProducts";
import { useState } from "react";
import { useEffect } from "react";

const InputForm = () => {
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
  const [Data, setData] = useState([]);

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
//   useEffect(
//     () => {
//       console.log("mostra la oster");
//       getData();
//     },
//     [],
//   );
  return (
    <>
      <input
        className="inpPost"
        type="text"
        placeholder="URL de la Imagen"
        value={imageUrl}
        onChange={handleInputChange}
      />
      <div>
        <img className="imgPost" src={imageUrl} alt="Imagen" />
      </div>

      <input
        type="text"
        value={Name}
        placeholder="Nombre"
        onChange={(event) => setName(event.target.value)}
      />

      <textarea
        value={Description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>

      <label htmlFor="products">Selecciona una categoria:</label>

      <select
        value={Category}
        onChange={(event) => setCategory(event.target.value)}
        name="products"
        id="products"
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

      <label htmlFor="PuntoVenta">Punto Venta:</label>
      <select
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

      <label htmlFor="price">Precio: </label>

      <input
        value={Price}
        onChange={(event) => setPrice(event.target.value.trim())}
        id="digito"
        type="number"
        placeholder="Precio"
      ></input>
      <button onClick={getAllItems}>Agregar Productos</button>
    </>
  );
};

export default InputForm;
