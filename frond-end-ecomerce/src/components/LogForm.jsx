import { useState } from "react"
import { getTask } from "../services/get";
import {  useNavigate } from "react-router-dom";



const LoginForm = () => {
  // const {data, updateData} = useTheContext()

  // updateData(data + 1)
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
          // Navigate('/',{replace : true} )*no te necesito pero te dejo ahi por si acaso
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
           <h1>login page</h1>
            <input value={User} onChange={(event) => setUser(event.target.value.trim())} id='User' type='text' placeholder='usuario'></input>
            <input value={Mail} onChange={(event) => setMail(event.target.value.trim())} id='Mail' type='text' placeholder='Correo Electronico'></input>
            <input value={Password} onChange={(event) => setPassword(event.target.value.trim())} id='Password' type='text' placeholder='Password'></input>
            <button onClick={logear}>logearse</button>
        </>
      )
    }
    
    export default LoginForm
