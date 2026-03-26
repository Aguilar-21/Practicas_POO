type generoEmpleado = "M" | "F";

class Empleado {
    nombre: string;
    genero: generoEmpleado;
    edad: number;
    numeroEmpleado: number;

    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number) {
        this.ValidarDatos(nombre, genero, edad, numeroEmpleado);
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.numeroEmpleado = numeroEmpleado
    }

    private ValidarDatos(nombre: string, genero: string, edad: number, numeroEmpleado: number) {
        if (nombre.trim().length < 3) throw new Error ('El nombre deebe teneral menos 3 caracteres');
        if (genero !== "M" && genero !== "F") throw new Error('El genero debe ser M o F');
        if (edad < 18) throw new Error('El empleado debe ser mayor de edad');
        if (numeroEmpleado < 10000000) throw new Error('El numero de empleado debe ser mayor a 10000000');
    }

}
