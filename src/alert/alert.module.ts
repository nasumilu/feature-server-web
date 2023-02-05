import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import {AlertService} from "./alert.service";



@NgModule({
  declarations: [
    AlertComponent
  ],
  providers: [
    AlertService
  ],
  exports: [
    AlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
