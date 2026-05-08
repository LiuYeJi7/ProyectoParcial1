//1
const formulario = document.getElementById('alumnoForm');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault(); 


    const datos = {
        nombre: document.getElementById('nombre').value,
        codigo: document.getElementById('codigo').value,
        correo: document.getElementById('correo').value,
        clave: document.getElementById('passAdmin').value 
    };

    try {
        
        const respuesta = await fetch('http://localhost:3000/api/alumnos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        if (respuesta.ok) {
            alert("✅ Alumno registrado: " + resultado.mensaje);
            formulario.reset(); 
        } else {
            alert("❌ Error: " + resultado.error);
        }

    } catch (error) {
        console.error("Error en la conexión:", error);
        alert("No se pudo conectar con el servidor. ¿Seguro que está prendido?");
    }
});



const tablaCuerpo = document.querySelector('table tbody'); 
//2
async function cargarAlumnos() {
    try {
        //3
        const respuesta = await fetch('http://localhost:3000/alumnos');
        const alumnos = await respuesta.json();

        tablaCuerpo.innerHTML = ""; 

        alumnos.forEach(alumno => {
            const fila = `
                <tr>
                    <td>${alumno.nombre}</td>
                    <td>${alumno.codigo}</td>
                    <td><span class="status-active">Registrado</span></td>
                </tr>
            `;
            tablaCuerpo.innerHTML += fila;
        });
    } catch (error) {
        console.error("Error cargando la tabla:", error);
    }
}

cargarAlumnos();


