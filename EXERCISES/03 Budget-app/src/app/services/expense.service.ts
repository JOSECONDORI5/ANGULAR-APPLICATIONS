import { Injectable } from '@angular/core';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenseBudgets: Expense[] = [
    new Expense('Apartment rent', 900),
    new Expense('clothes', 200)
  ];

  getExpenses(): Expense[] {
    return this.expenseBudgets;
  }

  saveExpense(expense: Expense): void {
    this.expenseBudgets.push(expense);
  }

  deleteExpense(expense: Expense): void {
    const index = this.expenseBudgets.indexOf(expense);
    this.expenseBudgets.splice(index, 1);
  }
}

