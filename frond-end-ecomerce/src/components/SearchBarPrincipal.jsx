import { Link } from "react-router-dom"

const SearchBarPrincipal = ({filtroxNombre, inputRef}) => {
  return (
    <>
        <div style={{ display:"flex",flexDirection:"row", gap:"30px"}}>
        <img style={{width: "100px", height:"40px"}} src="https://fjelie-mc.se/wp-content/uploads/2018/11/blog-ph-1.jpg" alt="Multichunches" />
        <input ref={inputRef} onInput={() => filtroxNombre(inputRef.current.value)}   type="text" placeholder='Busqueda Por Nombre'/>
        <Link to="#"> <p>Vende tus productos</p></Link>
        <Link to="#"> <p>Trabaja con nosotros</p></Link>
        </div>
    </>
  )
}

export default SearchBarPrincipal
