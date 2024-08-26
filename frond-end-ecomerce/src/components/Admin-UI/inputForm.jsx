import SelectorCategoria from "../Admin-UI/Selector-categoria";
import SelectorProvincia from "../Admin-UI/Selector-provincia";
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from "react-router-dom";
import "../../styles/inputAdmin.css";

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

  // URL de imagen por defecto
  const defaultImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGgKnt4k7cn5fjg0hrhdPqSg8hC_UiWnC1w&s';

  return (
    <>
    <Link to="http://localhost:5173/home"> <ReplyIcon sx={{ color: 'black', fontSize: 40 }}/> </Link>
      <div className="adminFormContainer">
        <label>Inserte el link de la imagen:</label>
        <input
          className="inpPost"
          type="text"
          placeholder="URL de la Imagen"
          value={imgUrl}
          onChange={handleInputChange}
        />

        
        <div>
          <img className="imgPost" src={imgUrl || defaultImgUrl} alt="Imagen" />
        </div>

        <label>Nombre del producto: </label>
        <input
          type="text"
          value={Name}
          placeholder="Nombre"
          onChange={(event) => setName(event.target.value)}
        />

        <label>Ingrese una descripcion del producto: </label>
        <textarea
          value={Description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>

        <label htmlFor="products">Selecciona una categoria:</label>
        <SelectorCategoria
          setCategory={setCategory}
          Category={Category}
          categoriaobj={categoriaobj}
        />

        <label htmlFor="PuntoVenta">Seleccione un punto de venta:</label>
        <SelectorProvincia
          setLocation={setLocation}
          Location={Location}
          provinciaobj={provinciaobj}
        />

        <label htmlFor="price">Edit el precio del producto: </label>
        <input
          value={Price}
          onChange={(event) => setPrice(parseInt(event.target.value.trim()))}
          min={1}
          id="digito"
          type="number"
          placeholder="Precio"
        ></input>
        <button onClick={getAllItems}>Agregar Productos</button>
      </div>
    </>
  );
};

export default InputForm;
