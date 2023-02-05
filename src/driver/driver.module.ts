import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DriversComponent} from "./drivers/drivers.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DriversComponent,
  ],
  exports: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DriverModule { }
