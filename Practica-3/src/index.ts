class CuentaBancaria {
    public titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }

    getSaldo(usuario: {nombre:string, role: string}) {
        if (usuario.role == 'cliente') {
            throw new Error ('Los clientes no pueden modifica el saldo.')
        }
        return this.saldo;
    }

    setSaldo(
        usuario: {nombre: string, role: string},
        saldo:number
    ){
        if (usuario.role == "cliente"){
            throw new Error('Los clientes no pueden ver el saldo.')
        }

        if (saldo <= 0){
            throw new Error('El saldo no puede ser menor a 0')
        }
        this.saldo += saldo;
    }
}

const usuarioAdmin = {
    nombre: "Admin", 
    role: "admin"
}
const usuario = {
    nomber: "Usuario", 
    role: "Cliente"
}

const cuentaAhorro  = new CuentaBancaria("Juan", 25)
console.log(cuentaAhorro.titular);
console.log(cuentaAhorro.getSaldo(usuarioAdmin));
cuentaAhorro.setSaldo(usuarioAdmin, 100);
console.log(cuentaAhorro);