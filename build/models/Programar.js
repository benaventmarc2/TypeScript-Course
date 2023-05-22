"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, description, completado, urgencia) {
        this.resumen = () => {
            return `Tarea de Programacion: ${this.titulo} - ${this.completada}`;
        };
        this.titulo = titulo;
        this.descripcion = description;
        this.completada = completado;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map