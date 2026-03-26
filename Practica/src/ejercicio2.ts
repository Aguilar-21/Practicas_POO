class Empleado {
    nombre: string;
    salarioBase: number;
    horasTrabajadas: number;

    constructor(nombre: string, salarioBase: number, horasTrabajadas: number) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas
    }

    calcularSalario(): number {
        return this.salarioBase * this.horasTrabajadas;
    }

    salarioApagar(): void {
        console.log(`Salario a pagar de ${this.nombre}: $${this.calcularSalario().toFixed(2)}`)
    }
}

const datos = new Empleado("Juan", 20, 6);
datos.salarioApagar();