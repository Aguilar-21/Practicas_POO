"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    constructor(titulo, autor, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    infoLirbo() {
        console.log(`\n Titulo: ${this.titulo} \n Autor: ${this.autor} \nNumero de paginas: ${this.numPaginas}`);
    }
}
const libro1 = new Libro("El regreso al Infierno", "James Wood", 300);
const libro2 = new Libro("Dia de Sangre", "Antony Rodas", 250);
libro2.infoLirbo();
libro1.infoLirbo();
//# sourceMappingURL=ejercicio5.js.map