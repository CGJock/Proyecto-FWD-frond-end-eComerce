
import AlignmentExample from '../../components/nav'
import CardProducts from '../../components/HomeCards'
import Asside from "../../components/Asside"
import { useState, useEffect } from 'react';
import { getItems } from '../../services/getProducts';




function Home() {
 const [dataFiltrada, setdataFiltrada] = useState([]);
 const [seleccionado, setseleccionado] = useState("");
 const [Price, setPrice] = useState("");
 const [puntoVenta, setPuntoVenta] = useState("");

 useEffect(
  () => {
    getItems().then((dataFiltrada) => setdataFiltrada(dataFiltrada));//con el .then espera el llamado de la data , cosa que no se podia hacer con el try catch
  },
  [] //pero se setea como un array vacion para evitar el enciclamiento
);

const priceSlider = (event) => {
  setPrice(event.target.value);
}

async function getAllItems() {
  const data = await getItems();
  console.log(seleccionado);
  const categ = data.filter((item) => item.category === seleccionado && Price > item.price);
  console.log(categ)
  setdataFiltrada(categ)

}
  return (
    <>
    <Asside seleccionado={seleccionado}setseleccionado={setseleccionado} Price={Price} setPrice={setPrice} priceSlider={priceSlider}
     puntoVenta={puntoVenta} setPuntoVenta={setPuntoVenta} getAllItems={getAllItems}/>
    <AlignmentExample/>
    <CardProducts dataFiltrada={dataFiltrada}/>
    </>
  )
}

export default Home