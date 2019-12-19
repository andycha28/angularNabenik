import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuxComponenentComponent } from './tux-componenent/tux-componenent.component';
import { DilloComponenentComponent } from './dillo-componenent/dillo-componenent.component';
import { RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { MozillaComponent } from './mozilla/mozilla.component';
import { LanguagesComponent } from './languages/languages.component';
import { TypeScriptComponent } from './languages/type-script/type-script.component';
import { JavaScriptComponent } from './languages/java-script/java-script.component';
import { languagesRoutes, LanguageModule } from './languages/language.module';
import { SecretComponent } from './secret/secret.component';
import { LoggedInGuard } from './logged-in.guard';
import { SessionComponent } from './session/session.component';
import { FormsModule} from '@angular/forms';

const routes: Routes = [
{path:'tux', component: TuxComponenentComponent},
{path: 'dillo', component: DilloComponenentComponent},
{path: 'mozilla/:name', component: MozillaComponent},
{path: 'languages', component: LanguagesComponent, children: languagesRoutes},
{path: 'secret', component: SecretComponent, canActivate: [LoggedInGuard]},
{path: 'session', component: SessionComponent},
{path: '', redirectTo: 'tux', pathMatch: 'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    TuxComponenentComponent,
    DilloComponenentComponent,
    MozillaComponent,
    LanguagesComponent,
    TypeScriptComponent,
    JavaScriptComponent,
    SecretComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    LanguageModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
