

import InputForm from "../../components/inputForm"
import { getItems } from "../../services/getProducts";
import { useState } from "react";
import postProducts from "../../services/PostProducts";

const Administration = () => {

  const [Category, setCategory] = useState("");
  const categoriaobj = {//objecto que se pasa como prop para setear la categoria
    Electrodomesticos: "electrodomesticos",
    Herramientas: "herramientas",
    Muebles: "muebles",
    Vestimenta: "vestimenta",
    LineaBlanca: "lineaBlanca",
    Celulares: "celulares",
    Juguetes: "juguetes",
    Libros: "libros",
 }
 
 const [Location, setLocation] = useState("");
 const provinciaobj = {//objecto que setea el lugar de venta
   Alajuela: "alajuela",
   Cartago:"cartago",
   Guanacaste: "guanacaste",
   Heredia: "heredia",
   SanJose: "sanjose",
   Limon: "limon",
   Puntarenas: "puntarenas",
 } 

 const [Price, setPrice] = useState("");
 const [imageUrl, setImageUrl] = useState("");
 const [Name, setName] = useState("");
 const [Description, setDescription] = useState("");
 const [Data, setData] = useState([]);
 
 async function getData() {
  const items = await getItems();//funcion que llama la data al cargar el componente
  setData(items);
}

async function getAllItems() {//se hace el post y luego se llama la data para ir actualizando con cada actualizacion
  postProducts(Name, Description, Price, Category, Location, imageUrl);
  getData();
}
const handleInputChange = (event) => {
  setImageUrl(event.target.value);
  
};

  return (
    <>
      {/* si se pasan varios props como objeto se envian de manera individual dentro de llaves*/}
      <InputForm 
      categoriaobj={categoriaobj} 
      provinciaobj={provinciaobj} 
      category={Category} 
      setCategory={setCategory} 
      Location={Location} 
      setLocation={setLocation}
       Price={Price} 
       setPrice={setPrice}
      Data={Data} 
      setData={setData} 
      Name={Name} 
      setName={setName} 
      Description={Description} 
      setDescription={setDescription} 
      handleInputChange={handleInputChange} 
      imageUrl={imageUrl} 
      setImageUrl={setImageUrl}
      getAllItems={getAllItems}
      />
      </>
  )
}

export default Administration