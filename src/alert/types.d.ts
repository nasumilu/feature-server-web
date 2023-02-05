import {Observable} from "rxjs";

export type AlertStyle = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

interface Alert {
  readonly style: AlertStyle;
  readonly dismissible: boolean;
  readonly message: string;
}

interface AlertGroupInterface {
  readonly name: string;
  readonly alerts$: Observable<Alert[]|null>
  alert(...alerts: Alert[]): void;
}
