const bcrypt = require('bcryptjs'); 

exports.registrarAlumno = async (req, res) => {
    try {
        const { nombre, codigo, correo, passwordAdmin } = req.body;

        const salt = await bcrypt.genSalt(10);
        const passHasheada = await bcrypt.hash(passwordAdmin, salt);

        console.log("¡ÉXITO! Hash generado:", passHasheada);

        res.status(201).json({ mensaje: "Alumno registrado con éxito", hash: passHasheada });
    } catch (error) {
        console.log("Error en el servidor:", error);
        res.status(500).json({ error: "Algo salió mal" });
    }
};