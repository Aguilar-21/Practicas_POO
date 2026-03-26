class Vehiculo {
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarDetalles(){
        console.log(`Detalles del vehiculo: \nMarca: ${this.marca} \nModelo: ${this.modelo} \nAño: ${this.año}`);
    }
}

const informacion = new Vehiculo("Toyota", "Celica", 2016);
informacion.mostrarDetalles();