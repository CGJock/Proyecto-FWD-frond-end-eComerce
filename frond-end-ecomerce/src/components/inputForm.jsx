import postProducts from "../services/PostProducts";
// import { getItems } from "../services/getProducts";
// import { useState } from "react";
// import { useEffect } from "react";

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
  imageUrl,
  setImageUrl,
  getAllItems,
}) => {

  return (
    <>
      <input
        className="inpPost"
        type="text"
        placeholder="URL de la Imagen"
        value={imageUrl}
        onChange={handleInputChange}
      />
      <div>
        <img className="imgPost" src={imageUrl} alt="Imagen" />
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

      <select
        value={Category}
        onChange={(event) => setCategory(event.target.value)}
        name="products"
        id="products"
      >
        <option value={categoriaobj.Electrodomesticos}>
          Electrodomesticos
        </option>
        <option value={categoriaobj.Herramientas}>Herramientas</option>
        <option value={categoriaobj.Muebles}>Muebles</option>
        <option value={categoriaobj.Vestimenta}>Vestimenta</option>
        <option value={categoriaobj.LineaBlanca}>LineaBlanca</option>
        <option value={categoriaobj.Celulares}>Celulares</option>
        <option value={categoriaobj.Juguetes}>Juguetes</option>
        <option value={categoriaobj.Libros}>Libros</option>
      </select>

      <label htmlFor="PuntoVenta">Punto Venta:</label>
      <select
        value={Location}
        onChange={(event) => setLocation(event.target.value)}
        name="puntoventa"
        id="puntoventa"
      >
        <option value={provinciaobj.Alajuela}>Alajuela</option>
        <option value={provinciaobj.Cartago}>Cartago</option>
        <option value={provinciaobj.Guanacaste}>Guanacaste</option>
        <option value={provinciaobj.Heredia}>Heredia</option>
        <option value={provinciaobj.SanJose}>SanJose</option>
        <option value={provinciaobj.Limon}>Limon</option>
        <option value={provinciaobj.Puntarenas}>Puntarenas</option>
      </select>

      <label htmlFor="price">Precio: </label>

      <input
        value={Price}
        onChange={(event) => setPrice(event.target.value.trim())}
        id="digito"
        type="number"
        placeholder="Precio"
      ></input>
      <button onClick={getAllItems}>Agregar Productos</button>
    </>
  );
};

export default InputForm;
