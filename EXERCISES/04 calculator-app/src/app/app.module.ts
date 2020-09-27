import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { LoginService } from './services/login.service';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent,
    PersonComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
