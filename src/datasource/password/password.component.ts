import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'datasource-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers: [{provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => PasswordComponent)}]
})
export class PasswordComponent implements OnInit, OnDestroy, ControlValueAccessor {

  #hide = true;
  readonly control: FormControl;
  readonly #onChangeSubscriptions: Subscription[] = [];
  #onTouched: () => void = () => {};

  constructor() {
    this.control = new FormControl(null);
  }

  @Input() set required(value: boolean|string) {
    if(typeof value === 'string') {
      value = value !== 'false';
    }
    value ? this.control.addValidators(Validators.required) : this.control.removeValidators(Validators.required);
  }

  get required(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  writeValue(value: string|null): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: (value: string|null) => void): void {
    this.#onChangeSubscriptions.push(this.control.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: () => void): void {
    this.#onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  get hide(): boolean {
    return this.#hide;
  }

  set hide(value: boolean) {
    this.#hide = value;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.#onChangeSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
