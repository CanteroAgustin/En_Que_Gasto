export class Presupuesto {

    titulo: string;
    descripcion: string;
    importe: number;

    constructor(titulo: string, descripcion: string, importe: number) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.importe = importe;
    }
}
