import { useState } from "react";
import { getItems } from "../services/getProducts";

const Asside = () => {
  let Electrodomesticos = "electrodomesticos";
  let Herramientas = "herramientas";
  let Muebles = "muebles";
  let Vestimenta = "vestimenta";
  let LineaBlanca = "lineaBlanca";
  let Celulares = "celulares";
  let Juguetes = "juguetes";
  let Libros = "libros";
  const [seleccionado, setSeleccionado] = useState("");
  const [Price, setPrice] = useState("500")
  const [puntoVenta, setPuntoVenta] =useState("");
  let Alajuela = "alajuela"
  let Cartago = "cartago"
  let Guanacaste = "guanacaste"
  let Heredia = "heredia"
  let SanJose = "sanjose"
  let Limon = "limon"
  let Puntarenas = "puntarenas"
  

  const priceSlider = (event) => {
    setPrice(event.target.value);
  }

  async function getAllItems() {
    const data = await getItems();
    console.log(seleccionado);
    const categ = data.filter((item) => item.category === seleccionado && Price > item.price);
    console.log(categ);
    console.log(Price)
  }

  return (
    <>
      <label htmlFor="products">Selecciona una categoria:</label>

      <select
        value={seleccionado}
        onChange={(event) => setSeleccionado(event.target.value)}
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

      <select
        value={puntoVenta}
        onChange={(event) => setPuntoVenta(event.target.value)}
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
      <label htmlFor="price">Precio Maximo: </label>
      <p>{Price}</p>
      <input type="range" min={0} max={500000} step={1000} value={Price} onChange={priceSlider}/>
      <button onClick={getAllItems}>Busqueda</button>
    </>
  );
};

export default Asside;
