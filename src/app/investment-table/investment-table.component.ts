import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css',
})
export class InvestmentTableComponent {
  private investmentService = inject(InvestmentService);

  get data() {
    return this.investmentService.annualData;
  }
}
