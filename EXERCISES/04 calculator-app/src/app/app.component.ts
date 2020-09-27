import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Calculator app';
  titlePersona = 'List of people';

  people: Person[] = [];

  resultAdd: number;

  constructor(
    private personService: PersonService){}

  ngOnInit(): void{
    this.people = this.personService.getPeople();
  }

  onResult(result: number): void {
    this.resultAdd = result;
  }

  /* onAddPeople(person: Person): void {
    this.personService.onAddPerson(person);
  } */
}
