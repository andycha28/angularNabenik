import { Observable, Observer } from 'rxjs';

//1 Observables (Streams)
//  - Flujo
//  - Final del flujo (completed)  (estado 1)

//Stream / Observable
//let universalesStream = Observable.of('http://universales.com');
let langs = ['JavaScript','TypeScript','Rust','Kotlin','Java','Clojure'];
let numbers = ['1','2','3','4','5','6'];

let universalesStream = Observable
    .interval(1000)
    .take(langs.length)
    .map(i => langs[i]);



//suscriptor 1
/*universalesStream.subscribe((data:any)=>{
console.log(data);
})*/

let partialObserverUniversale:Observer<string> = {
    next:(a) => console.log('Procesando ' + a),
    error:(a) => console.log(a),
    complete: () => console.log('Observador terminado')
};

universalesStream.subscribe(partialObserverUniversale);
console.log('Fin del programa');


//suscriptor 2
/* universalesStream.subscribe((data:any)=>{
    console.log('El sitio de universales es ' + data);
    
    })
*/
/*

for(let i = 0; i < langs.length; i++){
    console.log(langs[i]);
}
*/

//suscriptor 2
let universalesStreamNumbers= Observable
    .interval(1500)
    .take(numbers.length)
    .map(i => numbers[i]);



let partialObserverUniversale2:Observer<string> = {
    next:(a) => console.log('Procesando ' + a),
    error:(a) => console.log(a),
    complete: () => console.log('Observador terminado')
};

universalesStreamNumbers.subscribe(partialObserverUniversale2);
console.log('Fin del programa');
