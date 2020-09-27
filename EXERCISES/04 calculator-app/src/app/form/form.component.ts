import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  operandA: number;
  operandB: number;
  result: number;

  @Output() add = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.result = this.operandA + this.operandB;
    this.add.emit(this.result);
  }

}
