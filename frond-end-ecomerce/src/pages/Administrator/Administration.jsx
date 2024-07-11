import { getItems } from "../../services/getProducts";
import { useState, useEffect } from "react";
import InputForm from "../../components/Admin-UI/inputForm";
import postProducts from "../../services/PostProducts";
import AdminTable from "../../components/Admin-UI/AdminTable";
import delProducts from "../../services/delProducts";
import put from "../../services/put";


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
  const [Show, setShow] = useState(false);
  
  
const datos = {Name, Description, Price ,Category, Location, imgUrl}
const apiUrl = "http://localhost:3001/items"

 
useEffect(() => {
    getData();//use effect revisa constantemente el estado de la data
  }, []);

  async function getData() {
    const datos = await getItems();//se llama la data constantemente
    setData(datos);
  }


  async function getAllItems() {
    //se hace el post y luego se llama la data para ir actualizando con cada actualizacion
    
    if (!datos.Name) {
      return alert("rellena el nombre") }
      if (!datos.Description) {
        return alert("rellena el Descripcion") }
        if (!datos.Price) {
          return alert("rellenar precio") }
          if (!datos.Category) {
              return alert("rellenar categoria ") }
              if (!datos.Location) {
                  return alert("rellenar ubicacion") }
                  if (!datos.imgUrl) {
                    return alert("rellenar imagen")
                  }
    else {
      let phrase = 'Presiona ok para aceptar\nOk para aceptar o Cancelar.';
      if (confirm(phrase) == true) {
        await postProducts(apiUrl,datos);//se hace el post y se vacian los valores
       getData();
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setLocation('');
      setimgUrl('');
    }
      }
      }
  const handleInputChange = (event) => {
    setimgUrl(event.target.value);//funcion que hace un preview de la tabla del admin
  };


  async function delItems(id) {
  let phrase = 'Presiona ok para aceptar\nOk para aceptar o Cancelar.';
  if (confirm(phrase));
   await delProducts(apiUrl+"/",id);
   getData()
  } 

  function mostrarElementos() {
     setShow(true);//al clickar el boton editar se muestra el modal
     
  }

  async function editarItems(id,NameEdit,Description,Category,locationEdit,PrecioEdit,imgEditada) {
    console.log(Description);
    let phrase = 'Presiona ok para aceptar\nOk para aceptar o Cancelar.';
    const apiEdit = `http://localhost:3001/items/${id}`
    if (confirm(phrase));
    await put(apiEdit,NameEdit,Description,Category,locationEdit,PrecioEdit,imgEditada);
     getData()
     
     
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
        mostrarElementos={mostrarElementos}
        Show={Show}
        editarItems={editarItems}
      />
     
    </>
  );
};

export default Administration
