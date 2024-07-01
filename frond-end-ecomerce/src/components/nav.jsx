
import { Link } from 'react-router-dom'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import telefono from '../assets/telefono.png'
import correo from '../assets/correo.png'
import cerrarsesion from '../assets/cerrarsesion.png'
import perfil from '../assets/perfil.png'
import banner from '../assets/banner.png'
import Navegacion from '../components/dropdown.jsx'




const Nav = () => {
  return (
    <>
    <nav className='navBar'>

        <div className="superiorNav">

    <div className='superiorLeft'>
        <Link to="https://www.instagram.com"><img className= "icon" src={instagram} alt="" /></Link>
        
        <Link to="https://www.facebook.com"><img className= "icon" src={facebook} alt="" /></Link>
        
        <Link to="https://www.facebook.com"><div><img className= "icon" src={telefono} alt="" /></div></Link>
        
        <Link to="http://localhost:5173/about"><div><img className='icon' src={correo} alt="" /></div></Link>

        <div>Contactanos</div>
    
    </div>

    <div></div>

    <div className='superiorRight'>
        <Link to =""><img className= "icon" src={cerrarsesion} alt="" /></Link>
        <Link to =""><img className= "icon" src={perfil} alt="" /></Link>
    </div>

    </div>

    <div className="inferiorNav">
    <img className="banner" src={banner} alt="" />

    </div>
    <div>
        <Navegacion/>
    </div>


    </nav>
    </>
  )
}

export default Nav


