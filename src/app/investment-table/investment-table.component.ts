import { Component, Input } from '@angular/core';
import { AnnualDataModel } from '../annual-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css',
})
export class InvestmentTableComponent {
  @Input() data!: AnnualDataModel[];
}
