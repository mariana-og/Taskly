import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useEffect, useState } from 'react'
import { alertaError, alertaRedireccion } from '../helpers/Funciones'
let apiUsuarios = "http://localhost:3000/usuarios"

const Login = () => {
    const [getUsuario, setUsuario] = useState("")
    const [getContraseña, setContraseña] = useState("")
    const [usuarios, setUsuarios]  = useState([])
    let navigate = useNavigate

    function getUsuarios() {
        fetch(apiUsuarios)
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
        .catch((error) => console.log(error))
    }
    useEffect(() => {getUsuarios()}, [])

    function buscarUsuario() {
    let usuarioEncontrado = usuarios.find(
      (usuario) =>
        getUsuario == usuario.usuario && getContraseña == usuario.contraseña
    );
    return usuarioEncontrado;
  }
 function inicioSesion() {
    if (buscarUsuario()) {
      let tokenAcceso = generarToken();
      localStorage.setItem("token", tokenAcceso);
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      console.log("inicio sesion")
      alertaRedireccion(
        navigate,
        "Bienvenido " + buscarUsuario().nombre,
        "En breves segundos será redireccionado al Home",
        "success",
        "/panel-tareas"
      );
    } else {
      alertaError("error", "usuario y/o contraseña incorrectos");
    }
  }
  return (
    <section className='container-login'>
        <div className="container">
        <div className="heading">Inicio de sesion</div>
        <form className="form">
          <input required className="input" placeholder="usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input required className="input" type="password" id="password" placeholder="contraseña" 
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button className="login-button" onClick={() => {inicioSesion()}}>iniciar sesion</button>
        </form>
        <div className="social-account-container">
          <span className="title">O crea tu cuenta <Link>aqui</Link></span> 
        </div>
      </div>
    </section>

  )
}

export default Login
