import {Component, Input, OnInit} from '@angular/core';
import {DatasourceService} from "../datasource.service";
import {DatasourceComponent} from "../datasource/datasource.component";
import {map, tap} from "rxjs";
import {AlertService} from "../../alert/alert.service";
import {Alert} from "../../alert/types";
import {DATASOURCE_ALERT_GROUP_NAME} from "../datasource.module";

@Component({
  selector: 'datasource-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  @Input() datasource: DatasourceComponent|null = null;
  loading = false;

  constructor(
    private readonly datasourceService: DatasourceService,
    private readonly alertService: AlertService) {
  }

  connect(): void {
    if (this.datasource) {
      this.loading = true;
      this.datasourceService.connect$(this.datasource.options.value)
        .pipe(
          tap(value => this.loading = true),
          map<{success: boolean, message: string}, Alert>(value =>
            ({style: value.success ? 'success' : 'danger', dismissible: true, message: value.message })
          )
        ).subscribe(alert => {
          this.loading = false;
          this.alertService.alert(DATASOURCE_ALERT_GROUP_NAME, alert);
        });
    }
  }

  ngOnInit(): void {
  }

}
