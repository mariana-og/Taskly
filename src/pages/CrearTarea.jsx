import React, { useState } from 'react'
import "./CrearTarea.css"
import { useNavigate } from 'react-router-dom'
import { alertaRedireccion } from '../helpers/Funciones'
let apiTareas = "http://localhost:3000/tareas"

const CrearTarea = () => {

const [titulo, setTitulo] =useState("")
const [descripcion, setDescripcion] =useState("")
const [fecha_limite, setFecha_limite] =useState("")
const [prioridad, setPrioridad] =useState("")
const [estado, setEstado]= useState("")

let navigate = useNavigate()

 function CrearTarea() {
    let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
    let nuevaTarea = {
      titulo: titulo,
      descripcion: descripcion,
      fecha_limite: fecha_limite,
      prioridad: prioridad,
      estado: estado,
      id_usuario: usuarioLogueado.id,
    };
    fetch(apiTareas, {
      method: "POST",
      body: JSON.stringify(nuevaTarea),
    })
      .then(() => {
        alertaRedireccion(
          navigate,
          "Tarea registrada correctamente",
          "En breves segundos será redireccionado",
          "success",
          "/panel-principal"
        );
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <div className="formulario-tarea">
  <h2>Agregar Nueva Tarea</h2>
  <form>
    <label htmlFor="titulo">Título</label>
    <input
    onChange={(e) => setTitulo(e.target.value)}
      type="text"
      id="titulo"
      name="titulo"
      required
      
    />

    <label htmlFor="descripcion">Descripción</label>
    <textarea
    onChange={(e) => setDescripcion(e.target.value)}
      id="descripcion"
      name="descripcion"
      required
      
    ></textarea>

    <label htmlFor="fecha">Fecha Límite</label>
    <input
    onChange={(e) => setFecha_limite(e.target.value)}
      type="date"
      id="fecha"
      name="fecha"
      required
     
    />

    <label htmlFor="prioridad">Prioridad</label>
    <select
    onChange={(e) => setPrioridad(e.target.value)}
      id="prioridad"
      name="prioridad"
      required
    
    >
      <option value="">Selecciona</option>
      <option value="Alta">Alta</option>
      <option value="Media">Media</option>
      <option value="Baja">Baja</option>
    </select>

     <label htmlFor="estado">Estado</label>
      <select
      onChange={(e) => setEstado(e.target.value)}
        id="estado"
        name="estado"
        required
      >
        <option value="">Selecciona</option>
        <option value="Pendiente">Pendiente</option>
        <option value="En Proceso">En Proceso</option>
        <option value="Completada">Completada</option>
      </select>

    <button onClick={CrearTarea} type="button" className="btn-agregar">Agregar Tarea</button>
  </form>
</div>

    </div>
  )
}

export default CrearTarea
