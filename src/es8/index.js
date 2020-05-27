//El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado.

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//- Object.values: **devuelve los valores de un objeto convertidos en un arreglo.
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}
const values = Object.values(data);
console.log(values)
console.log(values.length)

//anteponer o agregar cadenas a un string
// padStart: añade a una cadena de caracteres otra en el inicio de la misma
// padEnd: añade a una cadena de caracteres otra al final de la misma de la misma
const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'))


/*
Los Trailing Commas son llamadas tambien Final Commas (comas finales) y aunque no son necesarias en ese último elemento se considera útil ponerla, ya que si algun desarrollador quisiera añadir un nuevo elemento podría evitarse ese error común de la coma dfaltante entre los dos ultimos elementos.

Los Trailing Commas aplican para arreglos, objetos, parametros en funciones, llamados en funciones y desestructuracion.
Pero no están permitidas en JSON! */
const obj = {
    name: 'oscar',
}

// Async Await
const helloworld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}
const helloAsync = async () => {
    const hello = await helloworld();
    console.log(hello);
};

helloAsync();
// try catch
const anotherFunction = async () => {
    try {
        const hello = await helloworld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();

