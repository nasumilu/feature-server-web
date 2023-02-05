import {Component, Input, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {FormControl, Validators} from "@angular/forms";
import {DriverService} from "../driver.service";

@Component({
  selector: 'drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  readonly #drivers$: Observable<Driver[]>;
  readonly control: FormControl;

  constructor(driverService: DriverService) {
    this.control = new FormControl(
      {value: '', disabled: true},
      {validators: Validators.required, nonNullable: true}
    );
    this.#drivers$ = driverService.drivers$
      .pipe(tap(drivers => drivers.length > 0 ? this.control.enable() : this.control.disable()));
  }

  get drivers$(): Observable<Driver[]> {
    return this.#drivers$;
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

  ngOnInit(): void { }

}
