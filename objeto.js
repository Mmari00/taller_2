const estudiante = {
    nombre: 'Juan Pérez',
    edad: 20,
    direccion: {
        ciudad: 'Medellín',
        calle: 'Calle 10',
        numero: 101
    },
    notas: {
        matematicas: 4.5,
        ingles: 3.8,
        ciencias: 4.0
    }
};

//Destructuración anidada - propiedades extraidas: nombre, ciudad, nota de matematicas
const {nombre, direccion: {ciudad}, notas:{matematicas}} = estudiante;
console.log(nombre);
console.log(ciudad);
console.log("Nota de matemáticas: " + matematicas);