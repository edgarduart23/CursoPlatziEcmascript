// Operador de reposo puede extraer las propiedades de un objeto que aún no se ha construido. ...all
const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

let {name, ...all} = obj;
console.log(name, all) // Si quito el argumento name, me trae todo menos el nombre.

//Utilizando propiedades de propagación se pueden añadir multiples objetos a otros objetos mediante ...nombre_objeto
const obj = {
    name: 'Oscar',
    age: 32,
}
const obj1 = {
    ...obj,
    country: 'MX',
}
console.log(obj1)

// Promise.finally podemos saber cuando ha terminado el llamado para realizar una lógica.
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            //? resolve('Hello World')
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

// reject(Expresion Regular)
//como agrupar bloques de reject y poder acceder a cada uno de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);