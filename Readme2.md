Instrucciones:

    npm install  : Para instalar las dependencias (express, mysql2, bcryptjs, cors).

    node server.js  : Para iniciar el servidor.

Sistema de Gestión de Alumnos:

    Profesor este proyecto es para una solucion integra para el registro y visualización de estudiantes de la U. Aplica conceptos avanzados de arquitectura de software, seguridad y persistencia de datos del curso de Desarrollo de Aplicaciones Web.

Tecnologías Utilizadas:

    Frontend: HTML5, CSS3 (Flexbox/Variables), JavaScript (Fetch API, Async/Await).

    Backend: Node.js, Express.

    Base de Datos: MySQL (XAMPP).

    Seguridad: Bcryptjs (Hashing).

Características de Seguridad:

    Hashing de Contraseñas: Uso de bcryptjs con 10 rondas de salting para asegurar que las credenciales no sean legibles en la base de datos.

    Consultas Preparadas: Protección contra ataques de Inyección SQL (SQLi) mediante el uso de marcadores de posición (?) en el driver mysql2.

    CORS: Configuración de intercambio de recursos de origen cruzado para seguridad en las peticiones API.

Estructura del Proyecto:

    ├── src/
    │   ├── controllers/   # Lógica de negocio (Hashing y Registro)
    │   ├── routes/        # Definición de Endpoints
    │   └── models/        # Clases de POO (Alumno.js)
    ├── server.js          # Punto de entrada y conexión a BD
    ├── index.html         # Interfaz de usuario
    └── script.js          # Lógica del cliente y Fetch