import {Component, Input, OnInit} from '@angular/core';
import {AlertService} from "../alert.service";
import {Observable} from "rxjs";
import {Alert} from "../types";

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  #group?: string;
  #alerts$: Observable<Alert[] | null>

  constructor(private readonly alertService: AlertService) {
    this.#alerts$ = this.alertService.alert$();
  }

  @Input() set group(value: string|undefined) {
    this.#group = value;
    this.#alerts$ = this.alertService.alert$(this.#group);  }

  get group(): string|undefined {
    return this.#group;
  }

  get alerts$(): Observable<Alert[] | null> {
    return this.#alerts$;
  }
}
