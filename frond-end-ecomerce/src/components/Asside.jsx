import '../styles/asside.css'


const Asside = ({Seleccionado,setSeleccionado,Price,setPrice,PriceSlider,PuntoVenta,setPuntoVenta,getAllItems,}) => {
  let Electrodomesticos = "electrodomesticos";
  let Herramientas = "herramientas";
  let Muebles = "muebles";
  let Vestimenta = "vestimenta";
  let LineaBlanca = "lineaBlanca";
  let Celulares = "celulares";
  let Juguetes = "juguetes";
  let Libros = "libros";
  let Alajuela = "alajuela"
  let Cartago = "cartago"
  let Guanacaste = "guanacaste"
  let Heredia = "heredia"
  let SanJose = "sanjose"
  let Limon = "limon"
  let Puntarenas = "puntarenas"
  
  return (
    <>
    <div className="asside-busqueda">
      <label htmlFor="products"><h6>Selecciona una categoria</h6></label>

      <select
        value={Seleccionado}
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
      

      <h6>Selecciona un punto de venta</h6>
      <select
        value={PuntoVenta}
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
      
      <label htmlFor="price"><h6>Precio Maximo:</h6> </label>
     
      <input className="slider" type="range" min={0} max={500000} step={5000} value={Price} onChange={PriceSlider}/>

      <h6>Monto: {Price}</h6>
      <button className="assideButton" onClick={getAllItems}>Busqueda</button>
      </div>
    </>
  );
};

export default Asside;
