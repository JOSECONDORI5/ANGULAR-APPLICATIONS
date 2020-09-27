import { Component, Input, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { IncomeService } from '../../services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  incomeBuedgets: Income[] = [];

  constructor(private incomeService: IncomeService) {
  }

  ngOnInit(): void {
    this.incomeBuedgets = this.incomeService.getIncomes();
  }

  deleteIncome(income: Income): void {
    this.incomeService.deleteIncome(income);
  }
}
