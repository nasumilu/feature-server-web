import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordComponent} from "./password/password.component";
import {DriversComponent} from "../driver/drivers/drivers.component";
import {DatasourceService} from "./datasource.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DatasourceComponent} from './datasource/datasource.component';
import {ConnectionComponent} from './connection/connection.component';
import {AlertModule} from "../alert/alert.module";
import {SaveComponent} from './save/save.component';
import {DatasourcesComponent} from './datasources/datasources.component';
import {DriverModule} from "../driver/driver.module";

export const DATASOURCE_ALERT_GROUP_NAME = 'datasource.module.alert_group';

@NgModule({
  declarations: [
    PasswordComponent,
    DatasourceComponent,
    ConnectionComponent,
    SaveComponent,
    DatasourcesComponent
  ],
  providers: [
    DatasourceService
  ],
  exports: [
    DatasourceComponent,
    DatasourcesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DriverModule,
    AlertModule
  ]
})
export class DatasourceModule {
}
