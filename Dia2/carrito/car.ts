
use strict
class carro {
    color: string;
    marca: string;
    constructor(color: string, marca: string){
        this.color = color
        this.marca = marca
    }
    running()
    {
        console.log( `Hey I am the car ${this.color}  and i am running`);
        
    }
}

var carroRojo = new carro('rojo' , 'ferrari');
var carroAzul = new carro('verde', 'mazda');
carroRojo.running();
carroAzul.running();