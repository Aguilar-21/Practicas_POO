"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(monto) {
        if (monto <= 0) {
            console.log("El monto a depositar debe ser mayor a cero.");
            return;
        }
        this.saldo += monto;
        console.log(`Depósito exitoso. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }
    retirar(monto) {
        if (monto <= 0) {
            console.log("El monto a retirar debe ser mayor a cero.");
            return;
        }
        if (monto > this.saldo) {
            console.log("Fondos insuficientes.");
            return;
        }
        this.saldo -= monto;
        console.log(`Retiro exitoso. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }
    mostrarSaldo() {
        console.log(`Saldo actual de ${this.titular}: $${this.saldo.toFixed(2)}`);
    }
}
const cuenta1 = new cuentaBancaria("Carlos", 500);
cuenta1.mostrarSaldo();
cuenta1.depositar(200);
cuenta1.retirar(100);
cuenta1.mostrarSaldo();
//# sourceMappingURL=ejercicio3.js.map