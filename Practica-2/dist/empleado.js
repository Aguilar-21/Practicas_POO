"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre, genero, edad, numeroEmpleado) {
        this.ValidarDatos(nombre, genero, edad, numeroEmpleado);
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.numeroEmpleado = numeroEmpleado;
    }
    ValidarDatos(nombre, genero, edad, numeroEmpleado) {
        if (nombre.trim().length < 3)
            throw new Error('El nombre deebe teneral menos 3 caracteres');
        if (genero !== "M" && genero !== "F")
            throw new Error('El genero debe ser M o F');
        if (edad < 18)
            throw new Error('El empleado debe ser mayor de edad');
        if (numeroEmpleado < 10000000)
            throw new Error('El numero de empleado debe ser mayor a 10000000');
    }
}
//# sourceMappingURL=empleado.js.map