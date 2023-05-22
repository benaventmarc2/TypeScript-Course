"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Trabajador = exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this._nombre} ${this._apellido} y tengo ${this._edad} años.`);
    }
}
exports.Persona = Persona;
class Trabajador extends Persona {
    constructor(sueldo, nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
    }
}
exports.Trabajador = Trabajador;
class Jefe extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this.empleados = [];
    }
}
exports.Jefe = Jefe;
//# sourceMappingURL=Personas.js.map