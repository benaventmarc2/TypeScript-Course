"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    constructor(nombre, cursos, apellido) {
        this.ID = "Marc";
        this._nombre = nombre;
        if (apellido) {
            this._apellidos = apellido;
        }
        this._cursos = cursos;
    }
    get horasEstudiadas() {
        let horaEstudiadas = 0;
        this._cursos.forEach((curso) => {
            horaEstudiadas += curso._horas;
        });
        return horaEstudiadas;
    }
    get getID() {
        return this.ID;
    }
    set getID(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiantes.js.map