class Libro {
    titulo: string;
    autor: string;
    numeroPaginas: number;

    constructor(titulo: string, autor: string, numeroPaginas: number){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    infoLibro(){
        console.log(`\n Titulo: ${this.titulo} \n Autor: ${this.autor} \n Numero de paginas: ${this.numeroPaginas}`);
    }
}

const libro1 = new Libro("El regreso al Infierno", "James Wood", 300);
const libro2 = new Libro("Dia de Sangre", "Antony Rodas", 250);
libro2.infoLibro();
libro1.infoLibro();