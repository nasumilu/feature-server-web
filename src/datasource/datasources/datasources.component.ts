import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DatasourceService} from "../datasource.service";
import {Observable} from "rxjs";
import {DatasourceComponent} from "../datasource/datasource.component";

@Component({
  selector: 'datasources',
  templateUrl: './datasources.component.html',
  styleUrls: ['./datasources.component.css']
})
export class DatasourcesComponent implements AfterViewInit {

  #selected?: Datasource;
  @ViewChild(DatasourceComponent) datasource!: DatasourceComponent;

  constructor(private readonly datasourceService: DatasourceService) { }

  list$(): Observable<Datasource[]> {
    return this.datasourceService.list$;
  }

  get selected(): Datasource|undefined {
    return this.#selected;
  }

  set selected(value: Datasource|undefined) {
    this.#selected = value;
    if (value) {
      this.datasource.options.setValue(value);
    } else {
      this.datasource.options.reset();
    }
  }

  addDatasource(): void {
    console.log("Add Datasource here.");
  }


  ngAfterViewInit(): void {
  }

}
