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
 
  private statusError = -1;
 
  constructor(
    private http: HttpClient
  ) {
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
