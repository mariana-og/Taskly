import React from 'react'
import { alertaRedireccion } from '../helpers/Funciones'
import { useNavigate } from 'react-router-dom'

const Encabezado = () => {
    let navigate = useNavigate()
    function cerrarSesion() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    alertaRedireccion(navigate, "Sesion finalizada", "En Breves segundos cerraremos la sesión", "info", "/")
  }
  return (
    <div>
      <header className="header">
        <h1 className="logo">✔ Taskly</h1>
        <div className="user-info">
          <span>Juan Pérez</span>
          <button onClick={cerrarSesion} type='button' className="logout-btn">Cerrar sesión</button>
        </div>
      </header>
    </div>
  )
}

export default Encabezado
