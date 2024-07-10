
import SelectorCategoria from "../Admin-UI/Selector-categoria";
import SelectorProvincia from "../Admin-UI/Selector-provincia";


const InputForm = ({
  categoriaobj,
  provinciaobj,
  Category,
  setCategory,
  Location,
  setLocation,
  Price,
  setPrice,
  Data,
  setData,
  Name,
  setName,
  Description,
  setDescription,
  handleInputChange,
  imgUrl,
  setimgUrl,
  getAllItems,
  
}) => {

  return (
    <>
      <input
        className="inpPost"
        type="text"
        placeholder="URL de la Imagen"
        value={imgUrl}
        onChange={handleInputChange}
      />
      <div>
        <img className="imgPost" src={imgUrl} alt="Imagen" />
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
      <SelectorCategoria setCategory={setCategory} Category={Category} categoriaobj={categoriaobj}/>
      

      <label htmlFor="PuntoVenta">Punto Venta:</label>
      <SelectorProvincia  setLocation={setLocation} Location={Location} provinciaobj={provinciaobj}/>

      <label htmlFor="price">Precio: </label>
      <input
        value={Price}
        onChange={(event) => setPrice(parseInt(event.target.value.trim()))}
        min={1}
        id="digito"
        type="number"
        placeholder="Precio"
      ></input>
      <button onClick={getAllItems}>Agregar Productos</button>
    </>
  );
};

export default InputForm;
