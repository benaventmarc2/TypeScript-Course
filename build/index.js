"use strict";
// Esto es un comentario en TS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Esto es un comentario Multilínea
*/
console.log("Hola TypeScript ¿Que tal?");
console.log("Hola TypeScript ¿Que tal?");
// Declaración de Variables
var nombre = "Marc";
console.log(`Hola ${nombre}`);
let email = "benaventmarc@gmail.com";
console.log(`El email es ${nombre} es ${email}`);
const PI = 3.1416;
// Peligro!! 
var apellidos = "San José";
apellidos = 3;
var error = false;
console.log(`¿Hay error?: ${error}`);
// Instanciación múltiple de variables
let a, b, c;
a = "TypeScript";
b = true;
c = 8.9;
// Types: number, string, boolean, void, null, y undefined
// Tipos más complejos
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinación de tipos de listas
let valores = [false, "Hola", true, 56];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompletado"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
let estadoTarea0 = Estados.Completado;
let estadoTarea1 = Estados.Incompletado;
let estadoTarea2 = Estados.Pendiente;
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let puestoMaraton1 = PuestoCarrera.Primero;
let puestoMaraton2 = PuestoCarrera.Segundo;
let puestoMaraton3 = PuestoCarrera.Tercero;
// Podemos crear variables que sigan la Interface Tarea
let tarea1 = {
    nombre: "Marc",
    estado: Estados.Completado,
    urgencia: 1
};
console.log(`Tarea: ${tarea1.nombre}`);
// Asignación múltiple de variables
let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
};
// Declaración con factor de propagación
// En Listas
let { titulo, estado, urgencia } = miTarea;
let listaCompraLuens = ["Leche", "Patatas"];
let listaCompraMartes = [...listaCompraLuens, "Pan", "Huevos"];
let listaCompraMiercoles = [false];
let listaCompraSemana = [...listaCompraLuens, ...listaCompraMartes];
// En Objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer12341234"
};
// Cambiar un valor por propagación
let nuevoEstadoApp = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    nombre: "Audi",
    precio: 1000,
    ano: 2010
};
// Condicionales
// Operadores ternarios
console.log(coche.ano < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
// If-else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        break;
    case Estados.Incompletado:
        break;
    case Estados.Pendiente:
        break;
    default:
        break;
}
// Bucles
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Incompletado,
        urgencia: 3
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Pendiente,
        urgencia: 4
    },
];
// Foreach
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
// For Classico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}
;
// Bucles While
while (tarea1.estado !== Estados.Completado) {
    if (tarea1.urgencia == 5) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.urgencia++;
    }
}
// Do While
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
// Funciones
/**
 *  Función que muestra un saludo por consola
 */
function saludar() {
    console.log("¡Hola mundo!");
}
saludar();
/**
 *
 * @param nombre Nombre de la persona a saludar
 */
function saludarParams(nombre) {
    console.log(`Hola ${nombre}`);
}
saludarParams("Marc");
function despedirPersona(nombre = "Marc") {
    console.log(nombre);
}
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log("Adios");
    }
}
function ejemploMultiType(a) {
    if (typeof (a) === "string") {
    }
    else if (typeof (a) === "number") {
    }
    else {
    }
}
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Marc");
const ejemploArrow = () => { };
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("hola", "Multiples", "strings", "en", "Esta", "funcion");
let empleado = {
    nombre: "Marc",
    apellidos: "Benavent",
    edad: 27
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
mostrarEmpleado(empleado);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
};
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar;
    }
};
const cobrarSalario = () => {
    console.log("Cobrar nomina de empleado");
};
obtenerSalario(empleado, () => "Cobrar Martín");
// Funcioens Async
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        //Await
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciónes");
        return;
    });
}
ejemploAsync().then(respuesta => {
    console.log("Repuesta", respuesta);
}).catch((error) => {
    console.log("Ha habido un error", error);
}).finally(() => "Todo ha terminado");
// Funciones Generadoras
function* ejemploGenerator() {
    //yield --> para emitir valores
    let index = 0;
    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}
let generador = ejemploGenerator();
console.log(generador.next().value);
// Worker
function* watcher(valor) {
    yield valor;
    yield* worker(valor);
    yield valor + 4;
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 worker
console.log(generatorSaga.next().value); // 1 worker
console.log(generatorSaga.next().value); // 2 worker
console.log(generatorSaga.next().value); // 3 worker
console.log(generatorSaga.next().value); // 4 watcher
// Sobrecarga de funciones
function mostrarError(error) {
    console.log("Ha habido un error: ", error);
}
// Persistencia de datos
// 1. LocalStorage  - Almacena los datos en el navegador(no se elminan automaticamente)
// 2. SesionStorage - Los datos persisten en la sesion del navegador
// 3. Cookies       - Tienen una fecha de caducidad y tiene un ambito en URL
// LocalStorage y SessionStorage
function guardar() {
    localStorage.set("nombre", "Marc");
    sessionStorage.set("nombre", "Marc");
}
function leer() {
    let nombre = localStorage.get("nombre");
    let nombreSession = sessionStorage.get("nombre");
}
function borrarItem(item) {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
}
function borrarTodas() {
    localStorage.clear();
    sessionStorage.clear();
}
// Cookies
const cookies_utils_1 = require("cookies-utils");
const Estudiantes_1 = require("./models/Estudiantes");
const cursos_mock_1 = require("./mock/cursos.mock");
const Personas_1 = require("./models/Personas");
const ITarea_1 = require("./models/interaces/ITarea");
const Programar_1 = require("./models/Programar");
const cookiesOptions = {
    name: "usuario",
    value: "Marc",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/"
};
// Set cookie
(0, cookies_utils_1.setCookie)(cookiesOptions);
//Leer la cookie
let cookieLeida = (0, cookies_utils_1.getCookieValue)("usuario");
//Eliminar cookie
(0, cookies_utils_1.deleteCookie)("usuario");
//Eliminar todas las Cookies
(0, cookies_utils_1.deleteAllCookies)();
// Clase Temporizador
class Temporizador {
    empezarTemp() {
        setTimeout(() => {
            if (!this.terminar)
                return;
            // Cuando haya pasado el tiempo, se ejecutara
            this.terminar();
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// Definimos la función del callback
miTemporizador.terminar = () => {
    console.log("Evento terminado");
};
// Lanzamos el temporizador
miTemporizador.empezarTemp();
setInterval(() => console.log("Tic"), 1000);
delete miTemporizador.terminar;
// ** Classes
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// Creamos un estudiante
const martin = new Estudiantes_1.Estudiante("Marc", listaCursos, "Benavent");
console.log(`${martin._nombre} estudia:`);
martin._cursos.forEach(curso => {
    console.log(`- ${curso._nombre} (${curso._horas})`);
});
// Herencia y Polimorfismo
let empleado1 = new Personas_1.Trabajador(100, "Marc", "Benavent", 27);
let empleado2 = new Personas_1.Trabajador(100, "Pepe", "Benavent", 43);
let empleado3 = new Personas_1.Trabajador(100, "Juan", "Benavent", 41);
let jefe = new Personas_1.Jefe("Pablo", "Garcia", 40);
jefe.empleados.push(empleado1, empleado2, empleado3);
jefe.empleados.forEach((trabajador) => trabajador.saludar());
// Uso de interfaces
let programar = {
    titulo: "Programar en TypeScript",
    descripcion: "Practica con Katas para aprender a desarrollar en TS",
    completada: false,
    urgencia: ITarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
};
console.log(programar.resumen());
// Tarea de Programación
let programarTS = new Programar_1.Programar("TypeScript", "Tarea de Programacion TS", false, ITarea_1.Nivel.Bloqueante);
console.log(programarTS.resumen());
// Decoradores
// - Clases
// - Parametros
// - Metodos
// - Propiedades
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class PruebaDecorador {
    constructor() {
        this.nombre = "Marc";
    }
}
__decorate([
    Override("Prueba"),
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
let prueba = new PruebaDecorador();
console.log(prueba.nombre);
function SoloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false,
    });
}
class PruebaSoloLectura {
    constructor() {
        this.nombre = "";
    }
}
__decorate([
    SoloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Marc";
console.log(prueba.nombre); // => Undefined
// Decorador parámetros de un método
function mostrarPosicion(target, key, paramIndex) {
    console.log("Posicion", paramIndex);
}
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, mostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
// Usamos el método con el parámetro y su decorador
new PruebaMetodoDecorador().prueba("Hola", false);
//# sourceMappingURL=index.js.map