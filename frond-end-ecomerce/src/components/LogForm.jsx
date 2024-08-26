import { useState,  } from "react"
import { Link } from "react-router-dom";
import { getTask } from "../services/get";
import {  useNavigate } from "react-router-dom";
import logocuadrado from '../assets/logocuadrado.png'
import '../styles/login.css'


const LoginForm = () => {

    const navigate = useNavigate()
    const [User, setUser] = useState("");//se dejan vacios por que es el dato que trae el input
    const [Password, setPassword] = useState("");
    const [Mail, setMail] = useState("")
    
    async function logear() {
        
        let datos = await getTask();
        let usuarioEncontrado = false;
        datos.forEach((e)=> {
        User === e.user && Password === e.password && Password === e.password ?  usuarioEncontrado = true : usuarioEncontrado = false 
        localStorage.setItem("user", JSON.stringify(User))//si ecuentra coincidencia en el usuario setea un llave en el local storage con su nombre
          console.log(User)
        });
        if (User === "ADMIN") {
          localStorage.setItem('userRole',User)
          navigate("/Administration")//solo al ser el admin le permite ir al la pagina de administracion
        } else if(usuarioEncontrado){
          navigate("/home")
        }else{
          alert("el usuario seleccionado no existe")
        }
      }
      return (
        <>
        <img className="logo" src={logocuadrado} alt="" />
        
          <div className="logContenedor">
           <h5>Por favor Ingresa tu correo y Contraseña</h5>
            <input  className="logInput" value={User} onChange={(event) => setUser(event.target.value.trim())} id='User' type='text' placeholder='usuario'></input>
            <input  className="logInput" value={Mail} onChange={(event) => setMail(event.target.value.trim())} id='Mail' type='text' placeholder='Correo Electronico'></input>
            <input  className="logInput" value={Password} onChange={(event) => setPassword(event.target.value.trim())} id='Password' type='password' placeholder='Password'></input>
            <button  className="loginBtn" onClick={logear}>Inicio Sesion</button>
           <Link to={"/register"}><p className="link" >aun no tienes cuenta?</p></Link>
            </div>
        </>
      )
    }
    
    export default LoginForm
