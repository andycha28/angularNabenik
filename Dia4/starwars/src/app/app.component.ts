import { Component, Inject } from '@angular/core';
import { Starship } from './starship/starship.model';
import { StarshipComponent } from './starship/starship.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars';
  starship: Starship[];
  selectedOne: string;
  //string[];
  constructor(public httpClient: HttpClient,
              @Inject('StarWarsApi') apiURL: string){

        httpClient.get(apiURL)
              .subscribe(data => {
                console.log(data['results'][0].manufacturer);
              })

    //this.starship = ['X-Wing','Millennium Falcon', 'Tie Bomber'];
    this.starship = [];
    this.starship.push(new Starship('Death Star', 'DS-1 Orbital Battle Station'));
    this.starship.push(new Starship('Y Wing', 'BTL Y-Wing'));
    this.starship.push(new Starship('Millennial Falcon', 'YT-1300 Light'));
  }
  addStarship(starshipName: HTMLInputElement, starshipModel: HTMLInputElement) {

      this.starship.push(new Starship(starshipName.value, starshipModel.value));
      console.log(this.starship);
      return false;
    /*console.log('A long time ago in a galaxy far far away .....');
    let closure = () => {
      console.log('Han shot first');
    }
    closure();
    return false;*/
  }

  starshipSelectionSubscriber(starship: Starship){
    console.log(`La nave emitida desde el componente hijo é:  ${starship.name}`);
    this.selectedOne = starship.name;
  }

  ordemNave()
  {
    this.starship.sort((a, b) =>  b.score - a.score);
    return this.starship;
  }


 

}
