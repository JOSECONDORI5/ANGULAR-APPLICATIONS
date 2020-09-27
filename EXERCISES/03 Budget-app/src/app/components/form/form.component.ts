import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { Income } from 'src/app/models/income';
import { ExpenseService } from 'src/app/services/expense.service';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  typeBudget = 'incomeOperation';

  descriptionBudget: string;
  valueBudget: number;

  constructor(
    private expenseService: ExpenseService,
    private incomeService: IncomeService
  ) {}

  ngOnInit(): void {
  }

  saveBudgetMonetaryValue(): void {
    if (this.typeBudget === 'incomeOperation') {
      this.incomeService.saveIncome(new Income(this.descriptionBudget, this.valueBudget));
    } else {
      this.expenseService.saveExpense(new Expense(this.descriptionBudget, this.valueBudget));
    }
  }

  getTypeBudgetSelected(evento: any): void {
    this.typeBudget = evento.target.value;
  }
}
