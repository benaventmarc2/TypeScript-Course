export class Persona {
    _nombre: string;
    _apellido: string;
    _edad: number;
    constructor(nombre: string, apellido: string, edad: number) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    public saludar():void{
        console.log(`Hola, me llamo ${this._nombre} ${this._apellido} y tengo ${this._edad} años.`);
    }
}
export class Trabajador extends Persona {
    _sueldo: number;
    constructor(sueldo: number, nombre: string, apellido: string, edad: number) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
    }
}

export class Jefe extends Persona {
    empleados: Trabajador[] = [];
    constructor(nombre: string, apellido: string, edad: number) {
        super(nombre, apellido, edad);
    }
}