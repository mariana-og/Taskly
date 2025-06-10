import React, { useState, useEffect } from 'react'
import "./PanelPrincipal.css"
import { alertaConfirmacion } from '../helpers/Funciones'
import { Link } from 'react-router-dom'
import Encabezado from '../componentes/Encabezado'
let apiTareas = "http://localhost:3000/tareas"

const PanelPrincipal = () => {
  let usuario =   JSON.parse(localStorage.getItem("usuario"))
  const [tareas, setTareas]= useState([])
  const [busqueda, setBusqueda]= useState("")
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

  
  function eliminarTarea(id) {
    alertaConfirmacion(id, apiTareas, getTareas);
  }

   function obtenerTareasFiltradas() {
    return tareas
      .filter((tarea) => tarea.id_usuario == usuario.id)
      .filter((tarea) =>
        tarea.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        tarea.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );

  }

  let tareasFiltradas = obtenerTareasFiltradas();
  
   function contarPorEstado(estado) {
  return tareas.filter(
    (tarea) => tarea.id_usuario === usuario.id && tarea.estado === estado
  ).length;
}

  

  return (
    <div>
       <div className="dashboard-container">
       <Encabezado/>

      <h2 className="section-title">Panel de Control</h2>

      <div className="cards-container">
        <div className="card pending">
          <p className="count">{contarPorEstado("Pendiente")}</p>
          <p>Pendientes</p>
        </div>
        <div className="card completed">
          <p className="count">{contarPorEstado("Completada")}</p>
          <p>Completadas</p>
        </div>
        <div className="card overdue">
          <p className="count">{contarPorEstado("Vencida")}</p>
          <p>Vencidas</p>
        </div><div className="card precesing">
          <p className="count">{contarPorEstado("En Proceso")}</p>
          <p>En Proceso</p>
        </div>
      </div>



      <div className="task-controls">
        <h3>Tareas</h3>
       <Link to={"/panel-principal/crear-tarea"}><button className="new-task-btn">+ Nueva Tarea</button></Link> 
      </div>
       <input
          type="text"
          placeholder="Buscar tareas"
          className="search-input"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

      <table className="task-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha Límite</th>
            <th>Prioridad</th>
            <th>Descripcion</th>
            <th>Acciones</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {
          tareasFiltradas.map((tarea, index) => (
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
                <Link to={"/panel-principal/editar/" +tarea.id}><button className="edit-btn">Editar</button></Link>
                
                <button className="delete-btn" onClick={()=>eliminarTarea(tarea.id)}>Eliminar</button>
              </td>
              <td>{tarea.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default PanelPrincipal
