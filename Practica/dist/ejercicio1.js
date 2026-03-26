"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    calcularTotal() {
        return this.precio * this.cantidad;
    }
    mostrarDetalle() {
        console.log("Producto: " + this.nombre);
        console.log("Precio: " + this.precio);
        console.log("Cantidad: " + this.cantidad);
        console.log("Total: " + this.calcularTotal());
    }
}
const producto1 = new Producto("Laptop", 1000, 2);
producto1.mostrarDetalle();
//# sourceMappingURL=ejercicio1.js.map