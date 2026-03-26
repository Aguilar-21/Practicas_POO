"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre, salarioBase, horasTrabajadas) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas;
    }
    calcularSalario() {
        return this.salarioBase * this.horasTrabajadas;
    }
    salarioApagar() {
        console.log(`Salario a pagar de ${this.nombre}: $${this.calcularSalario().toFixed(2)}`);
    }
}
const datos = new Empleado("Juan", 20, 6);
datos.salarioApagar();
//# sourceMappingURL=ejercicio2.js.map