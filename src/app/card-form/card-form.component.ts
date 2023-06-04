import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.min(100),
      Validators.max(999),
    ]),
  });

  onSubmit() {
    console.log(this.cardForm.value);
  }

  onResetClick() {
    this.cardForm.reset();
  }

  getStringValue(name: string | null | undefined): string {
    if (!name) {
      return '';
    } else {
      return name;
    }
  }
}
