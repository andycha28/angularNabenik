import { Inject, Injectable } from '@angular/core';

@Injectable()
export class Saludar {

    constructor(){
        console.log('creando instancia de saludar');
        
    }

    crearSaludo(name: String)
    {
        return 'Hola ' + name;
    }


}