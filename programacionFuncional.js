const productos = [
    { nombre: 'Laptop', categoria: 'Tecnología', precio: 1000 },
    { nombre: 'Smartphone', categoria: 'Tecnología', precio: 600 },
    { nombre: 'Camisa', categoria: 'Ropa', precio: 30 },
    { nombre: 'Teclado', categoria: 'Tecnología', precio: 50 },
    { nombre: 'Zapatillas', categoria: 'Ropa', precio: 80 }
];


//Filtrado de los productos por su categoría 'Tecnología'
const productosFiltadros = productos.filter(productos => productos.categoria === 'Tecnología');
console.log(productosFiltadros);

//Descuento del 10% a esos productos
const descuento = 0.1; 
const productosDescuento10 = productosFiltadros.map(productos => productos.precio - (productos.precio * descuento));
console.log("Laptop con descuento: " + productosDescuento10[0]);
console.log("Smartphone con descuento: " + productosDescuento10[1]);
console.log("Teclado con descuento: " + productosDescuento10[2]);

//Suma de los productos con descuento
const sumaProductos = productosDescuento10.reduce((acumulador, productosDescuento10) => acumulador + productosDescuento10, 0);
console.log("Total de la suma de los productos con descuento del 10%: " + sumaProductos);
