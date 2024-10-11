import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { InvestmentTableComponent } from './investment-table/investment-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentFormComponent, InvestmentTableComponent],
})
export class AppComponent {}
