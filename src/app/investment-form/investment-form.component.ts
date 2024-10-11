import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentFormModel } from './investment-form.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent {
  @Output() calculate = new EventEmitter<InvestmentFormModel>();
  initialInvestment = '100';
  annualInvestment = '0';
  expectedReturn = '7.5';
  duration = '5';

  constructor(private investmentService: InvestmentService) {}

  onCalculate() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });

    this.reset();
  }

  reset() {
    this.initialInvestment = '100';
    this.annualInvestment = '0';
    this.expectedReturn = '7.5';
    this.duration = '5';
  }
}
