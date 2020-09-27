import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Person } from '../models/person';
import { LoginService } from '../services/login.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

 /*  @Output() addPerson = new EventEmitter<Person>(); */
  nameInput: string;
  lastnameInput: string;

  constructor(
    private loginService: LoginService,
    private personService: PersonService
  ) { this.personService.greeting.subscribe(
    (index: number) => alert('The index is: ' + index)
  ); }

  ngOnInit(): void {
  }

  /* onAddPerson(nameInput: HTMLInputElement, lastnameInput: HTMLInputElement): void {
    const newPerson = new Person(nameInput.value, lastnameInput.value);
    this.addPerson.emit(newPerson);
  } */

  onAddPerson(): void {
    const newPerson = new Person(this.nameInput, this.lastnameInput);
    /* this.loginService.sendMessageChange('We send person: ' + newPerson.name + ' lastname: ' + newPerson.lastname);
    this.addPerson.emit(newPerson); */
    this.personService.addPerson(newPerson);
  }

}
