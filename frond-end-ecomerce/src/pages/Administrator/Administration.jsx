import { getItems } from "../../services/getProducts";
import { useState, useEffect } from "react";
import InputForm from "../../components/Admin-UI/inputForm";
import postProducts from "../../services/PostProducts";
import AdminTable from "../../components/Admin-UI/AdminTable";
import delProducts from "../../services/delProducts";


const Administration = () => {
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

  const [Price, setPrice] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Data, setData] = useState([]);

const datos = {Name, Description, Price ,Category, Location, imgUrl}
const apiUrl = "http://localhost:3001/items"
 
  

  useEffect(() => {
    async function getData() {
      const datos = await getItems();
      setData(datos);
    }
    getData();
  }, []);

  async function getData() {
    const items = await getItems(); //funcion que llama la data al cargar el componente
    setData(items);
  }

  async function getAllItems() {
    //se hace el post y luego se llama la data para ir actualizando con cada actualizacion
    if (!Name || !Description || !Price || !Category || !Location || !imgUrl) {
      return alert("No se permiten espacios en blancos")
    }
    let phrase = 'Presiona ok para aceptar\nOk para aceptar o Cancelar.';
    if (confirm(phrase) == true) {
      postProducts(apiUrl,datos);
      getData();
    }
    
  }
  const handleInputChange = (event) => {
    setimgUrl(event.target.value);
  };


  async function delItems(id) {
  let phrase = 'Presiona ok para aceptar\nOk para aceptar o Cancelar.';
  if (confirm(phrase) == true)
   await delProducts(apiUrl+"/",id)
  } 

 
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
        imgUrl={imgUrl}
        setimgeUrl={setimgUrl}
        getAllItems={getAllItems}
        
      />
      <AdminTable
        Data={Data}
        getData={getData}
        categoriaobj={categoriaobj}
        category={Category}
        setCategory={setCategory}
        provinciaobj={provinciaobj}
        Location={Location}
        setLocation={setLocation}
        delItems={delItems}
      />
     
    </>
  );
};

export default Administration
