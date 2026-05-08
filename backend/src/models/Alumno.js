class Alumno {
    constructor(nombre, codigo, correo, passwordHash) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.correo = correo;
        this.passwordHash = passwordHash;
    }
}
module.exports = Alumno;