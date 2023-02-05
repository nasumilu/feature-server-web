import {Component, Input, OnInit} from '@angular/core';
import {DatasourceComponent} from "../datasource/datasource.component";
import {DatasourceService} from "../datasource.service";

@Component({
  selector: 'save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  @Input() datasource: DatasourceComponent|null = null;
  saving = false;

  constructor(private readonly datasourceService: DatasourceService) { }

  ngOnInit(): void {
  }

  save(): void {
    if(this.datasource) {
      this.datasourceService.save$(this.datasource.options.value)
        .subscribe();
    }
  }

}
