import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenseBudgets: Expense[] = [];
  @Input() totalIncome: number;

  constructor( private expenseService: ExpenseService) {
   }

  ngOnInit(): void {
    this.expenseBudgets = this.expenseService.getExpenses();
  }

  deleteExpense(expense: Expense): void {
    this.expenseService.deleteExpense(expense);
  }

  calculatePercentageExpense(expense: Expense): number {
    return expense.value / this.totalIncome;
  }

}
