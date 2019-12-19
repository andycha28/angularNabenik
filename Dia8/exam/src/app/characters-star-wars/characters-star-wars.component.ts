import { Component, OnInit } from '@angular/core';
import { Character } from '../Character.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-characters-star-wars',
  templateUrl: './characters-star-wars.component.html',
  styleUrls: ['./characters-star-wars.component.css']
})
export class CharactersStarWarsComponent implements OnInit {
  imglink = 'assets/images/yoda.png';
  character = new Character();
  constructor(private appService: AppComponent) {
    this.character.name = 'Yoda';
   }

  ngOnInit() {
  }

  getPerson() {
    this.appService.getData()
    .subscribe(
      (res: Character) => {
        this.character = res;
        console.log(this.character.name);
        if (this.character.gender === 'n/a' && this.character.hair_color === 'n/a') {
          this.imglink = 'assets/images/R2.png';
        } else if (this.character.gender === 'n/a') {
          this.imglink = 'assets/images/yoda.png';
        } else if (this.character.gender === 'male') {
          this.imglink = 'assets/images/luke.png';
        } else if (this.character.gender === 'female') {
          this.imglink = 'assets/images/leia.png';
        }
      }

    );
  }

}
