import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Input() index: number;

  constructor( private personService: PersonService) { }

  ngOnInit(): void {
  }

  emitGreeting(): void {
    this.personService.greeting.emit(this.index);
  }

}
