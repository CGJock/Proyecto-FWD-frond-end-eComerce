import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTask } from '../services/fetch';
import { getTask } from '../services/fetch';
import { Link } from 'react-router-dom';
import '../styles/register.css'
import logocuadrado from '../assets/logocuadrado.png'


const Registform = () => {
    const navigate = useNavigate("");
    const [User, setUser] = useState(""); //se dejan vacios por que es el dato que trae el input
    const [Mail, setMail] = useState("");
    const [MailValidation, setMailValidation] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordValidation, setPasswordValidation] = useState("");
    const [ProfileExists, setProfileExists] = useState("");//flag para identificar si se encontro un usuarion en la base de datos
    const ReservedUsers = ['ADMIN' ,'ADMINISTRATOR','ADMINISTRATION'];//usuarios reservados solo para admins no se permit usuarios regulares con ese username
    async function HandleForm() {
         event.preventDefault()
         for (let i = 0; i < ReservedUsers.length; i++) {//funcion que revisa si se ingreso un usuario reservado
            if (User.toUpperCase() === ReservedUsers[i]) {
               return alert("Nombre de usuario no disponible")
            }
            
         }
         if (!User || !Mail || !MailValidation || !Password || !PasswordValidation) {
            return alert("rellena los espacios")//verificacion  si los input vienen vacios
        } else if (Mail != MailValidation || Password != PasswordValidation) {
            return alert("los datos no coinciden")//verificacion que mail, y contra sean iguales
        }
         let data = await getTask();
        for (const i in data) {
            if (Mail === data[i].mail || User === data[i].user){
                setProfileExists(true)
                //se valida si el perfil esta registrado
            }else {
                setProfileExists(false)
                
            }
        }
     if(ProfileExists === false){//si el perfil no existia previamente se registra y redirecciona a la pagina del login
                await postTask(User,Mail,Password)//se agregan los parametros al post
                alert("usuario creado con exito")
                navigate("/Login")
            } else if (ProfileExists === true) {
                alert("usuario o correo no disponible")
            } 
    }      
  return (
        <>   
        <img className='logo' src={logocuadrado} alt="" />
        <div className='contenedor'>
        <form  onSubmit={HandleForm} action="">

        <label>Ingrese su usuario <br />
        <input className='regInput' value={User} onChange={(event) => setUser(event.target.value.trim())} id='User' type='text' placeholder='Usuario'></input>
        </label> 
        
        <label>Ingrese su correo <br />
        <input className='regInput' value={Mail} onChange={(event) => setMail(event.target.value.trim())} id='Mail' type='text' placeholder='Correo'></input>
        </label>
        
        <label>Ingrese nuevamente su correo <br />
        <input className='regInput' value={MailValidation} onChange={(event) => setMailValidation(event.target.value.trim())} id='MailValidation' type="text" placeholder='Confirme su correo' />
        </label>
        
        <label>Ingrese su Contraseña <br />
        <input className='regInput' value={Password} onChange={(event) => setPassword(event.target.value.trim())} id='Password' type='text' placeholder='Contraseña'></input>
        </label>
        
        <label>Ingrese nuevamente su Contraseña <br />
        <input className='regInput' value={PasswordValidation} onChange={(event) => setPasswordValidation(event.target.value.trim())} id='Password' type='text' placeholder='Confirme su Contraseña'></input>
        </label>
        
        <input className='regBtn' type="submit" />
        <Link to="/login"><p>Ya tienes una cuenta?</p></Link>
        </form>
        </div>
      </>
    )
  
}

export default Registform