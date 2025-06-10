📓 TASKLY:
Taskly es una aplicación web diseñada para el estudiante realizar el seguimiento de sus tareas de manera agil y clara

📌 DESCRIPCIÓN:
Esta app permite que el estudiante visualice, agregue, edite, busque y elimine tareas, segun su estado. Perfecta para tener una visión mas clara acerca de los trabajos a entregar

🛠️ TECNOLOGIAS UTILIZADAS:
React JS – Biblioteca principal para la interfaz de usuario
JSON-Server – Simulación de API REST con datos en formato JSON
React Router DOM – Ruteo dinámico entre vistas
Fetch API – Alternativa para peticiones HTTP
SweetAlert2 – Alertas modernas y estilizadas
CSS – Estilos personalizados
HTML – Estructura base del proyecto

🎨 PALETA DE COLORES:
 #3b82f6
 #10b981
 #8b5cf6
 #f010ac
 #2563eb
 #d1d5db
 rgba
 ef4444

🔤 TIPOGRAFIAS:
Lato – Títulos
Roboto – Contenido general

🚀 EJECUCION DEL PROYECTO:
 El proyecto se ejecuta con dos servicios en paralelo:

Backend: JSON-Server (puerto por defecto: http://localhost:3000)
Frontend: Vite + React (puerto por defecto: http://localhost:5173)

💾 INSTALACIÓN:
Sigue estos pasos para clonar y ejecutar el proyecto localmente:

# 1. Clona el repositorio
git clone https://github.com/mariana-og/Taskly.git
cd track-x

# 2. Instala las dependencias del frontend
npm install

# 3. Inicia el servidor JSON (backend simulado)
npx json-server --watch db.json --port 3000

# 4. En una nueva terminal, inicia el frontend con Vite
npm run dev

🧩 MODELO DE DATOS (NoSQL):
USUARIOS:
[
  {
    "id": "1",
    "nombre": "mariana osorio",
    "usuario": "marihermosa",
    "contraseña": "marihermosa"
  },
  {
    "id": "2",
    "nombre": "alguien x",
    "usuario": "usuario2",
    "contraseña": "usuario2"
  },
  {
    "id": "519f",
    "nombre": "juan rosales",
    "usuario": "juanmaata",
    "contrasena": "1234"
  },
  {
    "id": "daee",
    "nombre": "juan osorio",
    "usuario": "juanmta",
    "contrasena": "1234"
  }
]
TAREAS:
[
  {
    "id_usuario": "2",
    "id": "1",
    "titulo": "Realizar maqueta de la celula",
    "fecha_limite": "2025-07-02",
    "prioridad": "Completada",
    "descripcion": "comprar materiales, investigar, explicar funcionalidades y entregarla",
    "estado": "completada"
  },
  {
    "id": "bd6c",
    "titulo": "vocabulario en ingles",
    "descripcion": "investiga",
    "fecha_limite": "2025-08-12",
    "prioridad": "Baja",
    "estado": "Pendiente",
    "id_usuario": "2"
  }
]

📫 AUTOR:
Desarrollado por: Mariana Osorio Granado
Tecnica en desarrollo de software
¡GRACIAS POR VISITAR ESTE PROYECTO!
