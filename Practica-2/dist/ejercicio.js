"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class transporte {
    constructor(marca, modelo, año) {
        this.ValidarDatos(marca, modelo, año);
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    ValidarDatos(marca, modelo, año) {
        const añoActual = new Date().getFullYear();
        if (año > añoActual)
            throw new Error('El año no puede ser mayor al año actual');
        if (marca.trim().length === 0)
            throw new Error('La marca no puede estar vacía');
        if (modelo.trim().length === 0)
            throw new Error('El modelo no puede estar vacío');
    }
}
class Automovil extends transporte {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.ValidarPuertas(numeroPuertas);
        this.numeroPuertas = numeroPuertas;
    }
    ValidarPuertas(numeroPuertas) {
        if (numeroPuertas < 2 || numeroPuertas > 5)
            throw new Error('El numero de puertas debe ser entre 2 y 5');
    }
}
class Motocicleta extends transporte {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.ValidarCilindrada(cilindrada);
        this.cilindrada = cilindrada;
    }
    ValidarCilindrada(cilindrada) {
        if (cilindrada < 50)
            throw new Error('La cilindrada debe ser mayor a 50cc');
    }
}
const auto1 = new Automovil("Toyota", "Corolla", 2020, 4);
const moto1 = new Motocicleta("Honda", "CBR500R", 2019, 500);
console.table(auto1);
console.table(moto1);
//# sourceMappingURL=ejercicio.js.map