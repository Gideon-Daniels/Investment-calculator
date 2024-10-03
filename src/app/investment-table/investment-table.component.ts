import { Component, Input } from '@angular/core';
import { AnnualDataModel } from '../annual-data.model';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css',
})
export class InvestmentTableComponent {
  @Input() data!: AnnualDataModel[];
}
