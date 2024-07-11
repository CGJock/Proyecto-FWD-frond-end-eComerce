
import AlignmentExample from '../../components/nav'
import CardProducts from '../../components/HomeCards'
import Asside from "../../components/Asside"
import SearchBarPrincipal from '../../components/SearchBarPrincipal';
import Footer from '../../components/Footer';
import { useState, useEffect, useRef } from 'react';
import { getItems } from '../../services/getProducts';




function Home() {
 const [dataFiltrada, setdataFiltrada] = useState([]);//data filtrada iniciara como un array vacio al que se le incorporaran elementos
 const [Seleccionado, setSeleccionado] = useState("");
 const [Price, setPrice] = useState("");
 const [puntoVenta, setPuntoVenta] = useState("");
 const [BusquedaXNombre,setBusquedaXNombre] = useState("");
 const inputKey = useRef();//para operacones logicas que no tienen que ver con render mejor useref
 

 useEffect(
  () => {//se ven los cambios de la data al filtrar el componente
    getItems().then((dataFiltrada) => setdataFiltrada(dataFiltrada));//con el .then espera el llamado de la data , cosa que no se podia hacer con el try catch
  },
  [] //pero se setea como un array vacion para evitar el enciclamiento
);

const PriceSlider = (event) => {//setea elvalor del slider
  setPrice(event.target.value);
}

async function getAllItems() {//fucion que trae los datos filtrados,con .filter se emparejan los elementos con las mismas condiciones
  const data = await getItems();
  const categ = data.filter((item) => item.Category === Seleccionado && Price > item.Price && item.Location === puntoVenta );
  setdataFiltrada(categ)

}
async function filtroxNombre(kInput) {//funcion que filtra los elementos por nombre en tiempo real con search bar
  
const data = await getItems();//se obtiene la data desde el llamado a la api

const filtroIncludes = data.filter((element) => element.Name.toLowerCase().includes(kInput));
  //el valor de la data va ser igual a un filtro de los elementos, en este caso nombre, y a cada uno de los elementos
  //se verifica si incluye kinput que trae el valor del input searchbar
  if (filtroIncludes) {
    setdataFiltrada(filtroIncludes)//si hay datos que cumplen la condicion filtro includes sera la nueva data
    
  } else{
   console.log("ni idea que pasa")
  }
}
  return (
    <>
   
    <AlignmentExample dataFiltrada={dataFiltrada}/>
    <SearchBarPrincipal inputRef={inputKey} dataFiltrada={dataFiltrada} BusquedaXNombre={BusquedaXNombre} setBusquedaXNombre={setBusquedaXNombre}
    filtroxNombre={filtroxNombre} />
    <div style={{display:"flex"}}>
    <Asside Seleccionado={Seleccionado}setSeleccionado={setSeleccionado} Price={Price} setPrice={setPrice} PriceSlider={PriceSlider}
     puntoVenta={puntoVenta} setPuntoVenta={setPuntoVenta} getAllItems={getAllItems}/>
    {dataFiltrada.length > 0 ? (     
    <CardProducts dataFiltrada={dataFiltrada}/>
      ) : (<p>No hay coincidencias</p>)}
       {/*se valida que la data sea mayor a 0 para mostrar los datos*/}
    </div>
    <Footer />
    </>
  )
}

export default Home