export class Presupuesto {

    id: number;
    titulo: string;
    descripcion: string;

    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}
