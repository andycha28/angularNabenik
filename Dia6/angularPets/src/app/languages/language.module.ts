import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { TypeScriptComponent } from './type-script/type-script.component';
import { JavaScriptComponent } from './java-script/java-script.component';

export const languagesRoutes: Routes = [
  {path: 'typescript', component: TypeScriptComponent},
  {path: 'javascript', component: JavaScriptComponent} ,
  {path: '', redirectTo: './typescript', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(languagesRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class LanguageModule { }
