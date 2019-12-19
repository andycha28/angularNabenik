import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './Character.model';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imglink = 'assets/images/yoda.png';
  private statusError = -1;
  character = new Character();
  constructor(
    private http: HttpClient
  ) {
    this.character.name = 'Yoda';

   }

  getPerson() {
    this.getData()
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


  getData(): Observable <Character> {
    const randomPerson = Math.floor(Math.random() * 10 + 1 );
    return this.http.get<Character>('https://swapi.co/api/people/' + randomPerson)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }


handleError( error: HttpErrorResponse) {
  this.statusError = error.status;
  return throwError('Something bad happened; please try again later.');
}

}