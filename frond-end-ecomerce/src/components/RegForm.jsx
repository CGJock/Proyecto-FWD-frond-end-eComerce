import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTask } from '../services/fetch';
import { getTask } from '../services/fetch';


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
                postTask(User,Mail,Password)//se agregan los parametros al post
                navigate("/Login")
            } else if (ProfileExists === true) {
                alert("usuario o correo no disponible")
            } 
    }      
  return (
        <>   
        <form onSubmit={HandleForm} action="">

        <label>Ingrese su usuario
        <input value={User} onChange={(event) => setUser(event.target.value.trim())} id='User' type='text' placeholder='usuario'></input>
        </label>Ingrese su correo
        <label>Ingrese su correo
        <input value={Mail} onChange={(event) => setMail(event.target.value.trim())} id='Mail' type='text' placeholder='contra'></input>
        </label>
        <label>Ingrese nuevamente su correo
        <input value={MailValidation} onChange={(event) => setMailValidation(event.target.value.trim())} id='MailValidation' type="text" placeholder='Confirme su correo' />
        </label>
        <label>Ingrese su Contraseña
        <input value={Password} onChange={(event) => setPassword(event.target.value.trim())} id='Password' type='text' placeholder='contra'></input>
        </label>
        <label>Ingrese nuevamente su Contraseña
        <input value={PasswordValidation} onChange={(event) => setPasswordValidation(event.target.value.trim())} id='Password' type='text' placeholder='contra'></input>
        </label>
        <input type="submit" />
        </form>
      </>
    )
  
}

export default Registform