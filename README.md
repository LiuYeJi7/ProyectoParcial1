#  🎓 Sistema de Gestión de Alumnos - Trabajo Parcial

Este proyecto es una plataforma web Full Stack desarrollada para la evaluación parcial del curso. Permite el registro de alumnos con persistencia en memoria, aplicando conceptos avanzados de arquitectura, asincronía y seguridad.

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone <enlace-de-tu-repo>
 Configurar el Backend:
Ve a la carpeta backend/.
Instala las dependencias: npm install.
Inicia el servidor: node server.js.
Configurar el Frontend:
Abre el archivo frontend/Index.html usando Live Server en VS Code (Puerto 5500).

 Tecnologías Utilizadas
Frontend: HTML5, CSS3 (Flexbox/Responsivo), JavaScript Vanilla.
Backend: Node.js, Express.js.
Seguridad: Bcryptjs para hashing de contraseñas.
Arquitectura: Patrón MVC (Model-View-Controller) simplificado.
 Aplicación de Requerimientos (Rúbrica)
1. Interfaz y DOM (Sem. 1-3)
Uso de HTML5/CSS3: Diseño responsivo mediante Flexbox.
DOM: Manipulación dinámica de la tabla de alumnos sin recargar la página.
2. Asincronía (Sem. 4)
Fetch API: Comunicación asíncrona con el servidor mediante async/await.
JSON: Intercambio de datos en formato JSON en todas las peticiones.
3. Arquitectura y POO (Sem. 5-6)
SOLID: Aplicación del Principio de Responsabilidad Única mediante la separación de rutas y controladores.
POO: Implementación de la clase Alumno para el manejo de datos.
4. Seguridad (Sem. 8)
Bcrypt: Hashing de contraseñas para protección de datos sensibles.
OWASP: Validación de entradas en el servidor para evitar datos nulos o malformados.

