// Esto es un comentario en TS

import { AsyncLocalStorage } from "async_hooks";

/* 
* Esto es un comentario Multilínea
*/
console.log("Hola TypeScript ¿Que tal?");
console.log("Hola TypeScript ¿Que tal?");

// Declaración de Variables
var nombre: string = "Marc";
console.log(`Hola ${nombre}`);

let email = "benaventmarc@gmail.com";
console.log(`El email es ${nombre} es ${email}`);

const PI: number = 3.1416;

// Peligro!! 
var apellidos: any = "San José";
apellidos = 3;

var error: boolean = false;

console.log(`¿Hay error?: ${error}`);

// Instanciación múltiple de variables
let a: string, b: boolean, c: number;
a = "TypeScript";
b = true;
c = 8.9;

// Types: number, string, boolean, void, null, y undefined

// Tipos más complejos
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

// Combinación de tipos de listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

// Enumerados
enum Estados {
    "Completado" = "C",
    "Incompletado" = "I",
    "Pendiente" = "P"
}
let estadoTarea0: Estados = Estados.Completado;
let estadoTarea1: Estados = Estados.Incompletado;
let estadoTarea2: Estados = Estados.Pendiente;

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}
let puestoMaraton1 = PuestoCarrera.Primero;
let puestoMaraton2 = PuestoCarrera.Segundo;
let puestoMaraton3 = PuestoCarrera.Tercero;

// Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// Podemos crear variables que sigan la Interface Tarea
let tarea1: Tarea = {
    nombre: "Marc",
    estado: Estados.Completado,
    urgencia: 1
}

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

let listaCompraLuens: string[] = ["Leche", "Patatas"];
let listaCompraMartes: string[] = [...listaCompraLuens, "Pan", "Huevos"];
let listaCompraMiercoles: boolean[] = [false]
let listaCompraSemana = [...listaCompraLuens, ...listaCompraMartes];

// En Objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer12341234"
}

// Cambiar un valor por propagación
let nuevoEstadoApp = {
    ...estadoApp,
    session: 4,
}

// Types de TypeScript
type Producto = {
    nombre: string,
    precio: number,
    ano: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 1000,
    ano: 2010
}

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
let listaTareasNueva: Tarea[] =
    [
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
listaTareasNueva.forEach(
    (tarea: Tarea, index: Number) => {
        console.log(`${index} - ${tarea.nombre}`);
    }
);

// For Classico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
};

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

} while (tarea1.estado !== Estados.Completado)

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
function saludarParams(nombre: string) {
    console.log(`Hola ${nombre}`);
}
saludarParams("Marc");
function despedirPersona(nombre: string = "Marc") {
    console.log(nombre);
}

function despedidaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log("Adios");
    }
}
function ejemploMultiType(a: string | number | boolean) {
    if (typeof (a) === "string") {

    }
    else if (typeof (a) === "number") {

    }
    else {

    }
}

function ejemploReturn(nombre: string, apellidos?: string): string | number {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Marc");

const ejemploArrow = () => { }

function ejemploMultipleParams(...nombres: string[]): void {
    nombres.forEach((nombre) => {
        console.log(nombre);
    })
}
ejemploMultipleParams("hola", "Multiples", "strings", "en", "Esta", "funcion");

// Arrow functions
type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
}

let empleado: Empleado = {
    nombre: "Marc",
    apellidos: "Benavent",
    edad: 27
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} años`;
mostrarEmpleado(empleado);

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
}

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar;
    }
}
const cobrarSalario = () => {
    console.log("Cobrar nomina de empleado");
}
obtenerSalario(empleado, () => "Cobrar Martín");

// Funcioens Async
async function ejemploAsync(): Promise<void> {
    //Await
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciónes");
    return;
}

ejemploAsync(

).then(respuesta => {
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
function* watcher(valor: number) {
    yield valor;
    yield* worker(valor);
    yield valor + 4;
}

function* worker(valor: number) {
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
function mostrarError(error: string | number): void {
    console.log("Ha habido un error: ", error);
}

// Persistencia de datos
// 1. LocalStorage  - Almacena los datos en el navegador(no se elminan automaticamente)
// 2. SesionStorage - Los datos persisten en la sesion del navegador
// 3. Cookies       - Tienen una fecha de caducidad y tiene un ambito en URL

// LocalStorage y SessionStorage
function guardar(): void {
    localStorage.set("nombre", "Marc");
    sessionStorage.set("nombre", "Marc");
}

function leer(): void {
    let nombre = localStorage.get("nombre");
    let nombreSession = sessionStorage.get("nombre");
}
function borrarItem(item: string) {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
}
function borrarTodas(): void {
    localStorage.clear();
    sessionStorage.clear();
}

// Cookies
import { getCookieValue, deleteCookie, setCookie, deleteAllCookies } from "cookies-utils";
import { appendFile } from "fs";

import { Estudiante } from "./models/Estudiantes";
import { Curso } from "./models/Cursos";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Jefe, Trabajador } from "./models/Personas";
import { ITarea, Nivel } from "./models/interaces/ITarea";
import { Programar } from "./models/Programar";




const cookiesOptions = {
    name: "usuario",
    value: "Marc",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/"
};
// Set cookie
setCookie(cookiesOptions);

//Leer la cookie
let cookieLeida = getCookieValue("usuario");

//Eliminar cookie
deleteCookie("usuario");

//Eliminar todas las Cookies
deleteAllCookies();

// Clase Temporizador
class Temporizador {
    public terminar?: () => void;
    public empezarTemp(): void {
        setTimeout(() => {
            if (!this.terminar) return;
            // Cuando haya pasado el tiempo, se ejecutara
            this.terminar();
        }, 10000)
    }
}
const miTemporizador: Temporizador = new Temporizador();
// Definimos la función del callback
miTemporizador.terminar = () => {
    console.log("Evento terminado");
}
// Lanzamos el temporizador
miTemporizador.empezarTemp();

setInterval(() => console.log("Tic"), 1000);

delete miTemporizador.terminar;

// ** Classes

const listaCursos: Curso[] = LISTA_CURSOS;

// Creamos un estudiante
const martin: Estudiante = new Estudiante("Marc", listaCursos, "Benavent");

console.log(`${martin._nombre} estudia:`);
martin._cursos.forEach(curso => {
    console.log(`- ${curso._nombre} (${curso._horas})`);
})

// Herencia y Polimorfismo
let empleado1 = new Trabajador(100, "Marc", "Benavent", 27);
let empleado2 = new Trabajador(100, "Pepe", "Benavent", 43);
let empleado3 = new Trabajador(100, "Juan", "Benavent", 41);

let jefe = new Jefe("Pablo", "Garcia", 40);
jefe.empleados.push(empleado1, empleado2, empleado3);
jefe.empleados.forEach((trabajador: Trabajador) => trabajador.saludar());


// Uso de interfaces
let programar: ITarea =
{
    titulo: "Programar en TypeScript",
    descripcion: "Practica con Katas para aprender a desarrollar en TS",
    completada: false,
    urgencia: Nivel.Urgente,
    resumen: function (): string {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
}
console.log(programar.resumen());

// Tarea de Programación
let programarTS = new Programar("TypeScript", "Tarea de Programacion TS", false, Nivel.Bloqueante);
console.log(programarTS.resumen());

// Decoradores
// - Clases
// - Parametros
// - Metodos
// - Propiedades
function Override(label: string) {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}
class PruebaDecorador {
    @Override("Prueba")
    nombre: string = "Marc"
}
let prueba = new PruebaDecorador();
console.log(prueba.nombre);

function SoloLectura(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false,
    })
}
class PruebaSoloLectura {
    @SoloLectura
    nombre: string = "";
}
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Marc";
console.log(prueba.nombre); // => Undefined

// Decorador parámetros de un método
function mostrarPosicion(target: any, key: string, paramIndex: number) {
    console.log("Posicion", paramIndex);
}

class PruebaMetodoDecorador {
    prueba(a: string, @mostrarPosicion b: boolean) {
        console.log(b);
    }
}
// Usamos el método con el parámetro y su decorador
new PruebaMetodoDecorador().prueba("Hola", false);