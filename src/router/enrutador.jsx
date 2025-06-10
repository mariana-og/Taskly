import RutaProtegida from "../componentes/RutaProtegida.jsx"
import CrearTarea from "../pages/CrearTarea.jsx"
import EditarTarea from "../pages/EditarTarea.jsx"
import Login from "../pages/Login.jsx"
import PanelPrincipal from "../pages/PanelPrincipal.jsx"
import Registro from "../pages/Registro.jsx"

export let enrutador=[
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/registro",
        element: <Registro/>
    },
    {
        path: "/panel-principal",
        element: <RutaProtegida proteger={<PanelPrincipal/>} />

    },
    {
    path: "/panel-principal/crear-tarea",
    element: <RutaProtegida proteger={<CrearTarea/>} />
    },
    {
    path: "panel-principal/editar/:id",
    element: <RutaProtegida proteger={<EditarTarea/>} />
    }
    
    

]