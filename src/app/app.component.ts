import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { InvestmentTableComponent } from './investment-table/investment-table.component';

import { InvestmentFormModel } from './investment-form/investment-form.model';
import { AnnualDataModel } from './annual-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentFormComponent, InvestmentTableComponent],
})
export class AppComponent {
  annualData: AnnualDataModel[] = [];

  calculateInvestmentResults(data: InvestmentFormModel) {
    this.annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initialInvestment + data.annualInvestment * year,
      });
    }
  }
}
