import Login from "../pages/Login.jsx"
import Registro from "../pages/Registro.jsx"

export let enrutador=[
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/registro",
        element: <Registro/>
    }
]