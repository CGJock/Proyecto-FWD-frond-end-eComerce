
import AlignmentExample from '../../components/nav'
import CardProducts from '../../components/HomeCards'
import Asside from "../../components/Asside"
import SearchBarPrincipal from '../../components/SearchBarPrincipal';
import { useState, useEffect, useRef } from 'react';
import { getItems } from '../../services/getProducts';




function Home() {
 const [dataFiltrada, setdataFiltrada] = useState([]);
 const [Seleccionado, setSeleccionado] = useState("");
 const [Price, setPrice] = useState("");
 const [puntoVenta, setPuntoVenta] = useState("");
 const [BusquedaXNombre,setBusquedaXNombre] = useState("");
 const inputKey = useRef()

 useEffect(
  () => {
    getItems().then((dataFiltrada) => setdataFiltrada(dataFiltrada));//con el .then espera el llamado de la data , cosa que no se podia hacer con el try catch
  },
  [] //pero se setea como un array vacion para evitar el enciclamiento
);

const PriceSlider = (event) => {
  setPrice(event.target.value);
}

async function getAllItems() {
  const data = await getItems();
  console.log(Seleccionado);
  const categ = data.filter((item) => item.category === Seleccionado && Price > item.price);
  console.log(categ)
  setdataFiltrada(categ)

}
async function filtroxNombre(kInput) {

  const data = await getItems();

 const filtroIncludes = data.filter((element) => element.name.includes(kInput));
  
  if (filtroIncludes) {
    setdataFiltrada(filtroIncludes)
    
  }
}
  return (
    <>
    <Asside Seleccionado={Seleccionado}setSeleccionado={setSeleccionado} Price={Price} setPrice={setPrice} PriceSlider={PriceSlider}
     puntoVenta={puntoVenta} setPuntoVenta={setPuntoVenta} getAllItems={getAllItems}/>
    <AlignmentExample dataFiltrada={dataFiltrada}/>
    <SearchBarPrincipal inputRef={inputKey} dataFiltrada={dataFiltrada} BusquedaXNombre={BusquedaXNombre} setBusquedaXNombre={setBusquedaXNombre}
    filtroxNombre={filtroxNombre}/>
    <CardProducts dataFiltrada={dataFiltrada}/>
    </>
  )
}

export default Home