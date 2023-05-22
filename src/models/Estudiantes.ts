import { Curso } from "./Cursos";

export class Estudiante {
    // Propiedades de clase
    _nombre: string;
    _apellidos?: string;
    _cursos: Curso[];

    private ID: string = "Marc";

    constructor(nombre: string, cursos: Curso[], apellido?: string) {
        this._nombre = nombre;
        if (apellido) {
            this._apellidos = apellido;
        }
        this._cursos = cursos;
    }
    get horasEstudiadas(): number {
        let horaEstudiadas = 0;
        this._cursos.forEach((curso: Curso) => {
            horaEstudiadas += curso._horas;
        })
        return horaEstudiadas;
    }
    get getID() :string
    {
        return this.ID;
    }
    set getID(id:string)
    {
        this.ID = id;
    }
}
