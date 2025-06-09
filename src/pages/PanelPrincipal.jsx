import React, { useState, useEffect } from 'react'
import "./PanelPrincipal.css"
let apiTareas = "http://localhost:3000/tareas"

const PanelPrincipal = () => {
  let usuario =   JSON.parse(localStorage.getItem("usuario"))
  const [tareas, setTareas]= useState([])
  function getTareas() {
    fetch(apiTareas)
      .then((response) => response.json())
      .then((data) => setTareas(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getTareas();
  }, []);

    function filtrarTareasUsuario() {
    let tareasUsuario = tareas.filter((tarea) => tarea.id_usuario == usuario.id);
    return tareasUsuario;
  }
  let filtradoUsuario = filtrarTareasUsuario();


  return (
    <div>
       <div className="dashboard-container">
      <header className="header">
        <h1 className="logo">✔ Taskly</h1>
        <div className="user-info">
          <span>Juan Pérez</span>
          <button className="logout-btn">Cerrar sesión</button>
        </div>
      </header>

      <h2 className="section-title">Panel de Control</h2>

      <div className="cards-container">
        <div className="card pending">
          <p className="count">5</p>
          <p>Pendientes</p>
        </div>
        <div className="card completed">
          <p className="count">3</p>
          <p>Completadas</p>
        </div>
        <div className="card overdue">
          <p className="count">2</p>
          <p>Vencidas</p>
        </div>
      </div>

      <div className="task-controls">
        <h3>Tareas</h3>
        <button className="new-task-btn">+ Nueva Tarea</button>
      </div>

      <input type="text" placeholder="Buscar tareas" className="search-input" />

      <table className="task-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha Límite</th>
            <th>Prioridad</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
          filtradoUsuario.map((tarea, index) => (
            <tr key={index}>
              <td>{tarea.titulo}</td>
              <td>{tarea.fecha_limite}</td>
              <td>
                <span className={`priority ${tarea.prioridad.toLowerCase()}`}>
                  {tarea.prioridad}
                </span>
              </td>
               <td>{tarea.descripcion}</td>
              <td>
                <button className="edit-btn">Editar</button>
                <button className="delete-btn">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default PanelPrincipal
