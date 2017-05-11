import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, FormControl } from '@angular/forms';
import { customDateValidator } from './validateDate.factory';

@Directive({
  selector: '[appDateField]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateDateDirective, multi: true }
  ]
})
export class ValidateDateDirective implements Validator {
  private _valFn: ValidatorFn;

  constructor() {
    this._valFn = customDateValidator();
  }

  validate(control: FormControl) {
    return this._valFn(control);
  }

}
