import { useState } from "react";
import { getItems } from "../services/getProducts";


const Asside = () => {
 const [seleccionado, setSeleccionado] = useState("")
  const [Electrodomesticos, setElectrodomesticos] = useState("electrodomesticos");
  const [Herramientas, setHerramientas] = useState("herramientas");
  const [Muebles, setMuebles] = useState("muebles");
  const [Vestimenta, setVestimenta] = useState("vestimenta");
  const [LineaBlanca, setLineaBlanca] = useState("lineaBlanca");
  const [Celulares, setCelulares] = useState("celulares");
  const [Juguetes, setJuguetes] = useState("juguetes");
  const [Libros, setLibros] = useState("libros");
  async function getAllItems() {
   
    console.log(Muebles)
    const data = await getItems();
   console.log(seleccionado);
  const categ = data.filter(item =>
    item.category === seleccionado)
    console.log(categ)
  }
  
  return (
    <>
      <label htmlFor="cars">Choose a car:</label>
      
      <select value={seleccionado} onChange={(event) => setSeleccionado(event.target.value)} name="cars" id="cars" >
        <option value={Electrodomesticos}>Electrodomesticos</option>
        <option value={Herramientas}>Herramientas</option>
        <option value={Muebles}>Muebles</option>
        <option value={Vestimenta} >Vestimenta</option>
        <option value={LineaBlanca}>LineaBlanca</option>
        <option value={Celulares}>Celulares</option>
        <option value={Juguetes}>Juguetes</option>
        <option value={Libros}>Libros</option>
        </select>
        <button onClick={getAllItems}>filter</button>
    </>
  );
};

export default Asside;
