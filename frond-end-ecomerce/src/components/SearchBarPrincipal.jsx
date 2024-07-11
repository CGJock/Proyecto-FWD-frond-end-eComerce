import { Link } from "react-router-dom";
import '../styles/searchbar.css'
//se utilizo input ref para poder traer el valor del input en tiemporeal 
const SearchBarPrincipal = ({filtroxNombre, inputRef}) => {
  return (
    <>
        <div className="searchBar">
          <div>
        <img style={{width: "100px", height:"40px"}} src="https://fjelie-mc.se/wp-content/uploads/2018/11/blog-ph-1.jpg" alt="Multichunches" />
        </div>
        <div >
        <input className="search" ref={inputRef} onInput={() => filtroxNombre(inputRef.current.value)}   type="text" placeholder='Busqueda Por Nombre'/>
        </div>
        <div style={{display:"flex", gap:"10px", paddingRight:"10px", textAlign:'center',paddingTop:"10px"}}>
        <Link to="#"> <p className="p-searchbar">Vende tus productos</p></Link>
        <Link to="#"> <p className="p-searchbar">Trabaja con nosotros</p></Link>
        </div>
        </div>
    </>
  )
}

export default SearchBarPrincipal
