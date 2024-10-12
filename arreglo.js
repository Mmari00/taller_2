const numeros = [5, 8, 12, 15, 2, 4, 18, 21];

//Multiplicación * 2
const numerosMultiplicados = numeros.map(numeros => numeros * 2);
console.log(numerosMultiplicados);

//Filtrar los números mayores a 10
const numerosFiltrados = numerosMultiplicados.filter(numeros => numeros > 10);
console.log(numerosFiltrados);

//Suma de los números filtrados
const numerosSuma = numerosFiltrados.reduce((acumuladorNumeros, numeros) => acumuladorNumeros + numeros, 0);
console.log(numerosSuma);