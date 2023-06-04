import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label = '';

  showErrors(): boolean {
    if (!this.control) {
      return false;
    }
    const { dirty, touched, errors } = this.control;
    if (dirty && touched && errors) {
      return true;
    }
    return false;
  }
}
