var fsaludar = function saludar() {
    console.log( "hola" + this.nombre);
    
}


var a = {nombre: " Marco", saludar: fsaludar}
var b ={nombre: " Alberto", saludar: fsaludar}
a.saludar();
b.saludar();

fsaludar();

console.log("---------------");

function sayhi() {
    console.log( "hola" + this.nombre);
    
}


var c = {nombre: " Marco", sayhi}
var d ={nombre: " Alberto", sayhi}
c.sayhi();
d.sayhi();

