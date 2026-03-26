class Producto {
    public nombre: string;
    public precio: number;
    
    constructor(nombre: string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    private productos: { producto: Producto, cantidad: number }[] = [];
    private total: number = 0;
    agregarProducto(producto: Producto, cantidad: number) {
        if (cantidad <= 0) {
            throw new Error('La cantidad debe ser mayor a 0');
        }
        this.productos.push({ producto, cantidad });
        this.calcularTotal();
    }   
    eliminarProducto(producto: Producto) {
        this.productos = this.productos.filter(p => p.producto !== producto);
        this.calcularTotal();
    }
    calcularTotal() {
        this.total = this.productos.reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);
    }
    mostrarDetalle() {
        console.log('Detalle del Carrito:');
        this.productos.forEach(item => {
            console.log(`Producto: ${item.producto.nombre}, Precio: $${item.producto.precio}, Cantidad: ${item.cantidad}`);
        });
        console.log(`Total: $${this.total}`);
    }
}

const producto1 = new Producto("Laptop", 1000);
const producto2 = new Producto("Mouse", 50);
const carrito = new Carrito();
carrito.agregarProducto(producto1, 2);
carrito.agregarProducto(producto2, 3);
carrito.mostrarDetalle();
carrito.eliminarProducto(producto1);
carrito.mostrarDetalle();
