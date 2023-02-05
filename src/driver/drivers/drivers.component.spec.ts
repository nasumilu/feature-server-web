import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversComponent } from './drivers.component';

describe('DriverComponent', () => {
  let component: DriversComponent;
  let fixture: ComponentFixture<DriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
