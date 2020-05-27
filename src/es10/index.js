/*ES10
Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
*/

//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad, en este caso seria un nivel
let array = [1,2,3, [1,2,3, [1,2,3]]];

//console.log(array.flat())
console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// trim
// trimStart: elimina los espacios al comienzo del parrafo
let hello= '          hello world';

console.log(hello);
console.log(hello.trimStart());

// trimEnd: elimina los espacios del final de un parrafo
let hello= 'hello world    ';

console.log(hello);
console.log(hello.trimEnd());

//-------------optional catch biding-------------/
// podemos pasar de forma opcional el parametro de error al valor de catch
try {

} catch {
    error
}

// fromEntries: va a transformar clave valor en un objeto, transformar arreglos a objetos
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//symbol: lo cual nos va a permitir acceder a una descripcion

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description)






