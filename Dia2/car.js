var carro = /** @class */ (function () {
    function carro(color, marca) {
        this.color = color;
        this.marca = marca;
    }
    carro.prototype.running = function () {
        console.log("Hey I am the car " + this.color + "  and i am running");
    };
    return carro;
}());
var carroRojo = new carro('rojo', 'ferrari');
var carroAzul = new carro('verde', 'mazda');
carroRojo.running();
carroAzul.running();
