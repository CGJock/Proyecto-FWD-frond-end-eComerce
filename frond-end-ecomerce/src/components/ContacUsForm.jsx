import React from 'react'


const ContacUsForm = () => {
    const FormsStyles ={
        backgroundColor: "red",
    };
  return (
    <>
    <h1>Ponte en contacto con nuestro equipo</h1>
    <div style={FormsStyles} className='ContacUsForm'>
    <form>
    <label>Ingrese su usuario
        <input  id='User' type='text' placeholder='usuario'></input>
        </label>Ingrese su correo
        <label>Ingrese su correo
        <input  id='Mail' type='text' placeholder='contra'></input>
        </label>
        <label>Ingrese nuevamente su correo
        <input  id='MailValidation' type="text" placeholder='Confirme su correo' />
        </label>
        <label>Ingrese su Contraseña
        <input id='Password' type='text' placeholder='contra'></input>
        </label>
        <label>Ingrese nuevamente su Contraseña
        <input  id='Password' type='text' placeholder='contra'></input>
        </label>
        <input type="submit" />
        </form>
        </div>
    </>
  )
}

export default ContacUsForm