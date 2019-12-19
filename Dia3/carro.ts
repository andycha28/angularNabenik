export class Carro {
    color: string;
    marca: string;
    modelo: number; 
    constructor(color, marca, modelo)
    {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    correr()
    {
        console.log(`Hola soy el carro ${this.marca} y soy ${this.color}`);
        
    }
}