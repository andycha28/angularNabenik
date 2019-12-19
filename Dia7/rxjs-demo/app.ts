/*import { Observable } from "rxjs";
import { ObserveOnOperator } from "rxjs/operators/observeOn";

let foo:string = 'hola mundo';
console.log(foo);


const observable = Observable.create(function(observer:any){
    observer.next(Math.random());
})

observable.subscribe((data:any) => {
    console.log(data);
    
});

observable.subscribe((data:any) => {
    console.log('dos ' + data);
    
});

let apiUrl = 'http://www.swapi.co/api/people/1/'

let requestStream = Observable.of(apiUrl);
let firstStream = Observable.of('hola ');

let secondStream = firstStream
        .map(info => info + 'mundo')
        

secondStream.subscribe(data => console.log(data)
);


/*
let responseStream = requestStream
                    .flatMap(function (apiUrl:any) {
                        jQuery.getJSON(apiUrl)
                        .done((response:any) => ObserveOnOperator.next(response))
                        .fail((error:any) => ObserveOnOperator.error(error))
                        .always(() =>)
                    })

*/
/*

let updateElement:any = document.querySelector('.refresh');


let updateElementStream = Observable.fromEvent(updateElement,'click');
    
updateElementStream.subscribe((event) => {
    console.log('el usuario hizo click' +
    JSON.stringify(event));
    
    
});


let updateElement2:any = document.querySelector('.refresh');
//stream 1
let updateclickStream = Observable.fromEvent(updateElement2,'click');

//stream 2
let refreshElementStream = updateclickStream
.map(() => {
    let randomPeople = Math.floor(Math.random() *10 +1);
    return 'https://swapi.co/api/people/' + randomPeople;
} );


let requestStreami = Observable.of(apiUrl);

let responseStreami = refreshElementStream
    .flatMap(function(apiUrl:any){

    });


refreshElementStream.subscribe(data =>  console.log('Buscando url ' + data));

let startUpStream =  Observable
    .merge(requestStreami,refreshElementStream);

*/



//functional 

import { Observable } from "rxjs";
import jQuery from "jquery";
let apiUrl = 'https://swapi.co/api/people/1/';

let updateElement:any = document.querySelector('.refresh');
//Stream 1
let updateClickStream = Observable.fromEvent(updateElement,'click');

//Stream 2
let refreshElementStream = updateClickStream
    .map(() => {
        let randomPerson = Math.floor(Math.random()*10 + 1 );
        return 'https://swapi.co/api/people/' + randomPerson
    })

refreshElementStream.subscribe((data) => console.log('Buscando url' + data));
//let requestStream = Observable.of(apiUrl);
let responseStream = refreshElementStream
    .flatMap(function(apiUrl:any) {
        return Observable.create(function(observer:any){
            jQuery.getJSON(apiUrl)
                .done((response:any) => observer.next(response))
                .fail((error:any) => observer.error(error))
                .always(()=> console.log('llamada finalizada'));
        })
    });

responseStream.subscribe((data:any) => console.log(data));