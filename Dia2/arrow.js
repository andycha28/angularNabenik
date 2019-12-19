function scopeTest(edad)
{
    this.edad = edad;
  //  this.incrementarEdad = function val(){
    this.incrementarEdad = () =>{
        console.log("Estoy incrementando edad");
        this.edad ++;
    }
    //return this;
}


class Duke{
    ejecutarMetodo(metodo) {
        console.log('Duke ejecutar metodo');
        metodo();
    }

}



var idade = new scopeTest(10);

var duke = new Duke();
duke.ejecutarMetodo(function(){console.log('TS Rules!!');});
duke.ejecutarMetodo(idade.incrementarEdad);
console.log(idade.edad);
idade.incrementarEdad();
console.log(idade.edad);







// var idade = scopeTest(10); // this
// idade.incrementarEdad();
//console.log( idade.edad);

//setTimeout(idade.incrementarEdad,1000);
//setTimeout(function(){console.log(idade.edad)},20000);


