
const SelectorCategoria = (
  {
    categoriaobj,
    Category,
    setCategory,
  }) => {
  return (
    <>
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
    </>
  )
}

export default SelectorCategoria