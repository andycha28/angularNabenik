"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.correr = function () {
        console.log("Hola soy el carro " + this.marca + " y soy " + this.color);
    };
    return Carro;
}());
exports.Carro = Carro;
