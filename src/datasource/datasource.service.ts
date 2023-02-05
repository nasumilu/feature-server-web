import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  readonly #list$: Observable<Datasource[]>;

  constructor(private readonly httpClient: HttpClient) {
    this.#list$ = this.httpClient.get<Datasource[]>(`${environment.baseUrl}/datasources`)
      .pipe(
        map<any, Datasource[]>(value => {
          const values = value.datasources;
          values.forEach((v: {links?: []}) => delete v.links);
          return values as Datasource[]
        }),
      );
  }

  get list$(): Observable<Datasource[]> {
    return this.#list$;
  }

  connect$(datasource: Datasource): Observable<{ success: boolean, message: string }> {
    return this.httpClient.post<{ success: boolean, message: string }>(
      `${environment.baseUrl}/datasources/test-connection`,
      datasource
    );
  }

  save$(datasource: Datasource): Observable<Datasource> {
    return this.httpClient.post<Datasource>(`${environment.baseUrl}/save`, datasource);
  }
}
