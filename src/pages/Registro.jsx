import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { alertaError, alertaRedireccion } from '../helpers/Funciones'
import { useEffect } from 'react'
import "./Registro.css"

let apiUsuarios = "http://localhost:3000/usuarios"
const Registro = () => {
    const [getUsuario, setUsuario] =useState("");
    const [getContraseña, setContraseña]= useState("");
    const [getNombre, setNombre]= useState("");
    const [usuarios, setUsuarios] = useState("");
    let navigate= useNavigate();
    


 function getUsuarios() {
    fetch(apiUsuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  function buscarUsuario() {
    let usuarioEncontrado = usuarios.find(
      (usuario) => getUsuario == usuario.usuario
    );
    return usuarioEncontrado;
  }

  function registrarUsuario() {
    if (!buscarUsuario()) {
      let nuevoUsuario = {
        nombre: getNombre,
        usuario: getUsuario,
        contrasena: getContraseña,
      };
      fetch(apiUsuarios, {
        method: "POST",
        body: JSON.stringify(nuevoUsuario),
      }).then(() => {
        getUsuarios();
      }).catch((error) => console.log(error))
      alertaRedireccion(
        navigate,
        "El usuario registrado correctamente",
        "En breves segundos será redireccionado al login",
        "success",
        "/"
      );
      let horaInicio = new Date();
      console.log(horaInicio);
      // setHoraLogin(horaInicio)
      // console.log(getHoraLogin);
    } else {
      alertaError("Error", "Usuario ya existe en la base de datos", "error");
    }
  }

  return (
    <div className='container-registro'>
              <div className="container">
        <div className="heading">Registro</div>
        <form className="form">
          <input required className="input" placeholder="usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input required className="input" type="password" id="password" placeholder="contraseña" 
            onChange={(e) => setContraseña(e.target.value)}
          />
          <input required className="input" type="texto" placeholder="nombre completo" 
            onChange={(e) => setNombre(e.target.value)}
          />
          <button className="login-button" type='button' onClick={registrarUsuario}>registrarse</button>
        </form>
        <div className="social-account-container">
          <span className="title">¿Ya tienes cuenta?, Inicia sesion <Link to={"/"}>aqui</Link></span> 
        </div>
      </div>
    </div>
  )
}

export default Registro
