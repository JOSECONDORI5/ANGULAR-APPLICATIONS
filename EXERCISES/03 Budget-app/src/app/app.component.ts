import { Component, OnInit } from '@angular/core';
import { Expense } from './models/expense';
import { Income } from './models/income';
import { ExpenseService } from './services/expense.service';
import { IncomeService } from './services/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'budget-app';
  incomeBudgets: Income[] = [];
  expenseBudgets: Expense[] = [];

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {
    this.expenseBudgets = this.expenseService.getExpenses();
    this.incomeBudgets = this.incomeService.getIncomes();
  }

  ngOnInit(): void {}

  getTotalIncome(): number {
    let incomeTotal = 0;
    this.incomeBudgets.forEach(income => {
      incomeTotal += income.value;
    });
    return incomeTotal;
  }

  getTotalExpense(): number {
    let expenseTotal = 0;
    this.expenseBudgets.forEach(expense => {
      expenseTotal += expense.value;
    });
    return expenseTotal;
  }

  getTotalPercentage(): number {
    return this.getTotalExpense() / this.getTotalIncome();
  }

  getTotalBudget(): number {
    return this.getTotalIncome() - this.getTotalExpense();
  }

}
