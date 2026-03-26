"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    constructor(nombre, carnet, notaFinal) {
        this.notaFinal = 0;
        this.carnet = carnet;
        this.nombre = nombre;
        this.notaFinal = 0;
    }
    mostrarInformacion(nombre, carnet, notaFinal) {
        console.log("Estudiante: " + this.nombre);
        console.log("Carnet " + this.carnet);
        console.log("Nota Final: " + this.notaFinal);
    }
    actualizarNota(nota) {
        if (nota < 0) {
            console.log("La nota no puede se rmenos a 0");
            return;
        }
        else {
            this.notaFinal = nota;
        }
    }
    actualizarCarnet(carnet) {
        this.carnet = carnet;
    }
}
const alumno1 = new Estudiante("Requeno", "U20240459", 7);
const alumno2 = new Estudiante("Juan", "U20250456", 8);
const alumno3 = new Estudiante("Isvi", "U20240498", 9);
// console.log(alumno1.mostrarInformacion());
// console.log(alumno2.mostrarInformacion());
// console.log(alumno3.mostrarInformacion());
// alumno1.actualizarCarnet("U20249586");
// alumno1.actualizarNota(10)
// console.log(alumno1.mostrarInformacion());
//# sourceMappingURL=ejemplo.js.map