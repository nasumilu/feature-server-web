import {AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DriversComponent} from "../../driver/drivers/drivers.component";
import {PasswordComponent} from "../password/password.component";
import {Observable} from "rxjs";

@Component({
  selector: 'datasource',
  templateUrl: './datasource.component.html',
  styleUrls: ['./datasource.component.css']
})
export class DatasourceComponent implements OnInit, AfterViewInit {

  @ViewChild(DriversComponent, {static: true}) driverComponent!: DriversComponent;
  @ViewChild(PasswordComponent, {static: true}) passwordComponent!: PasswordComponent;
  readonly options: FormGroup;

  constructor() {
    this.options = new FormGroup({
      id: new FormControl<number|null>(null),
      name: new FormControl<string>('', Validators.required),
      comment: new FormControl<string|null>(null),
      host: new FormControl<string>('', Validators.required),
      port: new FormControl<number|null>(null, Validators.required),
      username: new FormControl<string>('', Validators.required),
      dbname: new FormControl<string>('', Validators.required)
    });
  }

  get valueChanges(): Observable<Partial<Datasource>> {
    return this.options.valueChanges;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.options.addControl('driver', this.driverComponent.control);
    this.options.addControl('password', this.passwordComponent.control);
  }

}
