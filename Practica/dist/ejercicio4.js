"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarDetalles() {
        console.log(`Detalles del vehiculo: \nMarca: ${this.marca} \nModelo: ${this.modelo} \nAño: ${this.año}`);
    }
}
const informacion = new Vehiculo("Toyota", "Celica", 2016);
informacion.mostrarDetalles();
//# sourceMappingURL=ejercicio4.js.map