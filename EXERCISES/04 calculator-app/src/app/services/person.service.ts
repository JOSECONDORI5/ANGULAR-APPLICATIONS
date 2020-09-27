import { EventEmitter, Injectable } from '@angular/core';
import { Person } from '../models/person';
import { LoginService } from './login.service';

@Injectable()
export class PersonService {
  people: Person[] = [ new Person('Jose', 'Condori'), new Person('Antonio', 'Mendoza')];

  greeting = new EventEmitter<number>();

  constructor(private loginService: LoginService){}

  addPerson(person: Person): void {
    this.loginService.sendMessageChange('We add person: ' + person.name);
    this.people.push(person);
  }

  getPeople(): Person[] {
    return this.people;
  }
}
