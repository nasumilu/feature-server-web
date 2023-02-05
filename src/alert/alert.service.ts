import {Injectable, isDevMode} from '@angular/core';
import {Alert, AlertGroupInterface} from "./types";
import {BehaviorSubject, Observable, tap} from "rxjs";

const DEFAULT_ALERT_GROUP_NAME = 'alert.default_group_name';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  readonly #alertGroups = new Set<AlertGroupInterface>();

  constructor() {
    this.#alertGroups.add(new AlertGroup(DEFAULT_ALERT_GROUP_NAME));
  }

  alert$(name?: string): Observable<Alert[]|null> {
    name ??= DEFAULT_ALERT_GROUP_NAME;
    return this.#findGroup(name).alerts$
      .pipe(tap(() => isDevMode() ? console.log(`Getting alert group ${name}`): null));
  }

  #findGroup(name: string): AlertGroupInterface {
    let group = Array.from(this.#alertGroups).find(group => group.name === name);
    if (!group) {
      group = new AlertGroup(name);
      this.#alertGroups.add(group);
    }
    return group;
  }

  alert(name: string, ...alerts: Alert[]) {
    this.#findGroup(name).alert(...alerts);
  }
}

class AlertGroup implements AlertGroupInterface {

  readonly #name: string;
  readonly #alertsSubject$ = new BehaviorSubject<Alert[]|null>(null);
  readonly #alerts$ = this.#alertsSubject$.asObservable();

  public constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  get alerts$(): Observable<Alert[]|null> {
    return this.#alerts$;
  }

  alert(...alerts: Alert[]): void {
    this.#alertsSubject$.next(alerts);
  }

}
