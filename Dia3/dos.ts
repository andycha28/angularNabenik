import {penguin, dog} from "./uno"
import {Carro} from "./carro"
import turtle from "./tres"


var amigo = penguin;
var myDog = dog;

console.log(`Hola amigo pinguino: ${amigo}`);
console.log(`Hola amigo dog: ${myDog}`);


var myCar = new Carro('rojo','mazda',1990);

myCar.correr();
//myCar.corre();
var myTurtle = turtle;
console.log(`Hola amigo turtle: ${myTurtle}`);