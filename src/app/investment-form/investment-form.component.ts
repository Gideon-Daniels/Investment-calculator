import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  onCalculate(form: NgForm) {
    this.investmentEvent.emit(form.value);
  }
}
