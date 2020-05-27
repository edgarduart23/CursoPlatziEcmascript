function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);

}

// es6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
};
newFunction2();
newFunction2('Ricardo', '23', 'CO');


// 
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);


// es6 template literal
let epicPharase2 = `${hello} ${world}`;
console.log(epicPharase2);

//multilinea 
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit \n"
+ "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);

//Destructuración
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);
//es6
let {name, age, country} = person;
console.log(name, age, country);

// spread operator (operador de propagacion) permite expandir de ciertas situaciones varios elementos
let team1 = ['Oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];
let education2= ['david', 'oscar', 'julian', 'ricardo', 'valeria',
                'yesica', 'camila']
console.log(education2);
//es6
let education = ['david', ...team1, ...team2];
console.log(education);

//let es como variables
var hola = 'hola';

{
    var globalVar = 'global var'
}
{
    let globalLet = 'global let'
    console.log(globalLet)
}

console.log(globalVar);
console.log(globalLet)
// en este caso da error porque globalLet esta definido solo para ese bloque
// hay que definirlo dentro del bloque 

// CONST es una constante no cambia su valor
const a = 'b';
console.log(a);

// propiedad de objetos mejorada
let name = 'Edgardo';
let age = 32;

obj = {name: name, age: age};
//es6
obj2 = {name, age};

console.log(obj);
console.log(obj2);

//arrow function una sintaxis reducida y un this no vinculable
const names = [
    {name: 'edgardo', age: 32},
    {name: 'jose', age: 34},

]

let listOfNames = names.map(function (iemt){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames = (name, age, country) =>{
    ...console.
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

//promesas vamos a trabar con el asincronismo
const helloPromise = () => {
    return new Promise( (resolve,reject) => {
        if (true) {
            resolve ('Hey!');
        } else {
            reject('Ups!!');
        }
    } );
}
 helloPromise()
  .then(response => console.log(response))
  .then(response => console.log('hola'))
  .catch(error => console.log(error));

  //clases
  class calculator {
      constructor(){
          this.valueA = 0;
          this.vaueB =0;
      }
      sum(valueA, valueB){
          this.valueA = valueA;
          this.valueB = valueB;
          return this.valueA + this.valueB;
      }
  }
  const calcu = new calculator();
  console.log(calcu.sum(2,2));
 //módulos
 import {hello} from './module';
 hello();

 //generadores
 function*  helloWorld() {
     if(true) {
         yield 'Hello, ';
     }
     if (true) {
         yield 'World';
     }
 };
 const generatorHello = helloWorld();
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);




