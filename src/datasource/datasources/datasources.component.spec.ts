import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcesComponent } from './datasources.component';

describe('DatasourcesComponent', () => {
  let component: DatasourcesComponent;
  let fixture: ComponentFixture<DatasourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
