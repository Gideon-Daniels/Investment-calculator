import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentFormModel } from './investment-form.model';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent {
  @Output() investmentEvent = new EventEmitter<InvestmentFormModel>();
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  onCalculate() {
    this.investmentEvent.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
