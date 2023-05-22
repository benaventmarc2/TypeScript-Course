import { ITarea, Nivel } from "./interaces/ITarea";

export class Programar implements ITarea {
    titulo: string;
    descripcion?: string | undefined;
    completada: boolean;
    urgencia?: Nivel | undefined;
    constructor(titulo: string, description: string, completado: boolean, urgencia: Nivel) {
        this.titulo = titulo;
        this.descripcion = description;
        this.completada = completado;
        this.urgencia = urgencia;
    }
    resumen = (): string => {
        return `Tarea de Programacion: ${this.titulo} - ${this.completada}`;
    }
}