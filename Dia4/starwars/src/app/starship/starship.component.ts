import { Component, OnInit, HostBinding, Input, EventEmitter, Output, ReflectiveInjector, Inject } from '@angular/core';
import { Starship } from './starship.model';
import { Saludar } from '../saludar.service';


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() starship: Starship;
  @Output() selectedStarship: EventEmitter<Starship>;
  saludar: Saludar;
  nombreMascosta: string;

  constructor(dependencia: Saludar, 
              @Inject('mascotaUniversales') nombreMascosta: string,
              @Inject('valorPuntual') valor: string) {

    console.log(valor);
    this.selectedStarship = new EventEmitter();
   // const injector: any = ReflectiveInjector.resolveAndCreate([Saludar]);
    //this.saludar = injector.get(Saludar);
    this.saludar =  dependencia;
    this.nombreMascosta = nombreMascosta;
  }


  ngOnInit() {
    console.log(`Hola soy ${this.nombreMascosta} y estoy encargado de la nave ${this.starship.name}`);
  }

  selectStarship() {
    //this.selectedStarship.emit(this.starship);
     let saludo = this.saludar.crearSaludo(this.starship.name);
     console.log(saludo);

  }

  eventTester() {
    const eventEmmiter = new EventEmitter();

    //suscriptor 1
    eventEmmiter.subscribe(
      (param: string) => {
        console.log(`Este es el primer evento ${param}`);
      }
    );

    //suscriptor 2
    eventEmmiter.subscribe(
      (param: string) => {
        console.log(`Este es el segundo suscriptor ${param}`);
      }
    );
    eventEmmiter.emit(this.starship.name);
  }

  voteUp() {
    this.starship.voteUp();
    return false;
  }

  voteDown() {
    this.starship.voteDown();
    return false;
  }




} 


