import React from 'react'

const Encabezado = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">✔ Taskly</h1>
        <div className="user-info">
          <span>Juan Pérez</span>
          <button className="logout-btn">Cerrar sesión</button>
        </div>
      </header>
    </div>
  )
}

export default Encabezado
