import { Injectable } from '@angular/core';
import { Income } from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private incomeBudgets: Income[] = [
    new Income('Salary', 4000),
    new Income('Venta de coche', 500)
  ];

  getIncomes(): Income[] {
    return this.incomeBudgets;
  }

  saveIncome(income: Income): void {
    this.incomeBudgets.push(income);
  }

  deleteIncome(income: Income): void {
    const index = this.incomeBudgets.indexOf(income);
    this.incomeBudgets.splice(index, 1);
  }

}
