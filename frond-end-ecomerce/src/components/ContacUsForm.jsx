import logocuadrado from '../assets/logocuadrado.png'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import '../styles/about.css'

const ContacUsForm = () => {
   
    
  return (
    <>
   <Link to="/home"> <HomeIcon/></Link>
    <h1>Ponte en contacto con nuestro equipo</h1>
    <img className='logo' src={logocuadrado} alt="" />
    <div>
      <p>En Multichunches nos preocupamos por nuestros clientes
      es por eso que llevamos mas de 20 años trabajando de la mano de ellos, siempre caracterizandonos,
      por un servicion al cliente impecable y atencion al detalle, Es por eso que reservamos este espacio para ti, el usuario
      si tienes alguna duda, consulta o reclamo sobre nuestra tienda, <br />
      Te recordamos que en Multichunches siempre estamos dispuetos a mejorar y escuchar a nuestros clientes
    </p>
    </div>
    <div className="contenedorContactUs" >
      <p className='inputs' >Ingrese Su Correo</p>
      <input type="text" placeholder="Ingrese Su correo" />

      <p className='inputs' >Ingresa tu queja o consulta</p>
      <textarea name="Escribe tu consulta" id=""></textarea>

     <div> <button className='contactUsBtn' onClick={() => alert("te responderemos en menos de 72 horas")}>Enviar</button></div>
    </div>
    </>
  )
}

export default ContacUsForm