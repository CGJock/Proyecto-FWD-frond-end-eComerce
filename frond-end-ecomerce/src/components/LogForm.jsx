import { useState } from "react"
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
        localStorage.setItem("user", JSON.stringify(e.user))
        
        });
        if (User === "ADMIN") {
          navigate("/Administration")
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
            <input  className="logInput" value={Password} onChange={(event) => setPassword(event.target.value.trim())} id='Password' type='text' placeholder='Password'></input>
            <button  className="loginBtn" onClick={logear}>Inicio Sesion</button>
            </div>
        </>
      )
    }
    
    export default LoginForm
