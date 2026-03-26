class producto {
    public nombre: String;
    public precio: number;
    private stock: number;

    constructor(nombre: string, precio: number, stock: number){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    aumentarStock(cantidad: number){
        if (cantidad <= 0) {
            throw new Error('La cantidad a aumentar debe ser mayor a 0');
        }
        this.stock += cantidad;
    }

    disminuirStock(cantidad: number) {
        if(cantidad <= 0) {
            throw new Error('La cantidad a disminuir debe ser mayor a 0');
        }
        this.stock -= cantidad;

        if (this.stock < 0) {
            this.stock = 0;
            throw new Error('El stock no puede ser menor a 0');
        }
    }

    mostrarInformacion() {
        console.log(`Producto: ${this.nombre} - Precio: $${this.precio} - Stock: ${this.stock}`);
    }
}

const producto1 = new producto("Laptop", 1000, 10);
producto1.mostrarInformacion();
producto1.aumentarStock(5);
producto1.mostrarInformacion();
producto1.disminuirStock(3);
producto1.mostrarInformacion();
producto1.disminuirStock(20);
producto1.mostrarInformacion();

