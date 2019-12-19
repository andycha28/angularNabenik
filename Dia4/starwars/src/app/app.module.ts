import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipComponent } from './starship/starship.component';
import { Saludar } from './saludar.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: Saludar, useClass: Saludar},
    {provide: 'mascotaUniversales', useValue: 'Dillo'},
    {provide: 'StarWarsApi', useValue: 'https://swapi.co/api/starships/?search=falcon'},
    {provide: 'valorPuntual', useFactory() {
      console.log('Estoy fabricando el valor');
      return 'valor desde el factory';
    }}
    //Saludar
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
