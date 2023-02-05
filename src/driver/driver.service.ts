import { Injectable } from '@angular/core';
import {Observable, shareReplay, switchMap} from "rxjs";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  readonly #drivers$: Observable<Driver[]>

  constructor(httpClient: HttpClient) {
    this.#drivers$ = httpClient.get<Driver[]>(`${environment.baseUrl}/drivers`)
      .pipe(shareReplay(1));
  }

  get drivers$(): Observable<Driver[]> {
    return this.#drivers$;
  }
}
