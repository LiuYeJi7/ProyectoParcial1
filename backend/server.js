const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'gestion_alumnos'
});

db.connect(err => {
    if (err) throw err;
    console.log('Base de datos conectada.');
});

module.exports = db;

// Esto es del anterior por si acaso lo puse como comentario si lo necesitas lo reviertes
// pero creo que asi puede funcionar
//app.post('/registrar', (req, res) => {
    //const { nombre, codigo, correo, clave } = req.body;
    //const sql = "INSERT INTO alumnos (nombre, codigo, correo, clave) VALUES (?, ?, ?, ?)";
    
    //db.query(sql, [nombre, codigo, correo, clave], (err, result) => {
        //if (err) return res.status(500).json({ error: err.message });
        //res.json({ mensaje: '¡Alumno guardado en XAMPP!', id: result.insertId });
    //});
//});

//Modificacion (2): He puesto el const alumnosRoutes y app.use para que nos ayude en el hashing xd

const alumnoRoutes = require('./src/routes/alumnoRoutes');
app.use('/api', alumnoRoutes);


app.get('/alumnos', (req, res) => {
    const sql = "SELECT * FROM alumnos";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results); 
    });
});

app.listen(3000, () => console.log('Server en puerto 3000'));