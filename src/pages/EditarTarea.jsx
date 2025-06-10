import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { alertaRedireccion } from '../helpers/Funciones'
let apiTareas= "http://localhost:3000/tareas"
const EditarTarea = () => {

    const [titulo, setTitulo]= useState("")
    const [descripcion, setDescripcion] =useState("")
    const [fecha_limite, setFecha_limite] =useState("")
    const [prioridad, setPrioridad] =useState("")
    const [estado, setEstado]= useState("")
    let navigate= useNavigate()
    let { id } = useParams();

    function getTareaId() {
    fetch(apiTareas + "/" + id)
      .then((respose) => respose.json())
      .then((data) => {
        setTitulo(data.titulo);
        setDescripcion(data.descripcion);
        setFecha_limite(data.fecha_limite);
        setEstado(data.estado);
        setPrioridad(data.prioridad);
      });


  }

  useEffect(() => {


    getTareaId();


  }, []);

   function EditarTarea() {
    let nuevaTarea = {
      titulo: titulo,
      descripcion: descripcion,
      fecha_limite: fecha_limite,
      estado: estado,
      prioridad: prioridad,
    };
    fetch(apiTareas +"/"+ id, {
      method: "PATCH",
      body: JSON.stringify(nuevaTarea),
    })
      .then(() => {
        alertaRedireccion(
          navigate,
          "Tarea editada correctamente",
          "En breves segundos será redireccionado",
          "success",
          "/panel-principal"
        );
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <div>
      <div className="formulario-tarea">
  <h2>Editar Tarea {titulo}</h2>
  <form>
    <label htmlFor="titulo">Título</label>
    <input
    onChange={(e) => setTitulo(e.target.value)}
      type="text"
      id="titulo"
      name="titulo"
      value={titulo}
      required
      
    />

    <label htmlFor="descripcion">Descripción</label>
    <textarea
    onChange={(e) => setDescripcion(e.target.value)}
      id="descripcion"
      name="descripcion"
      value={descripcion}
      required
      
    ></textarea>

    <label htmlFor="fecha">Fecha Límite</label>
    <input
    onChange={(e) => setFecha_limite(e.target.value)}
      type="date"
      id="fecha"
      name="fecha"
      value={fecha_limite}
      required
     
    />

    <label htmlFor="prioridad">Prioridad</label>
    <select
    onChange={(e) => setPrioridad(e.target.value)}
      id="prioridad"
      name="prioridad"
      value={prioridad}
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
        value={estado}
        required
      >
        <option value="">Selecciona</option>
        <option value="Pendiente">Pendiente</option>
        <option value="En Proceso">En Proceso</option>
        <option value="Completada">Completada</option>
      </select>

    <button onClick={EditarTarea} type="button" className="btn-agregar">Editar Tarea</button>
  </form>
</div>

    </div>
    </div>
  )
}

export default EditarTarea
