import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsSummaryComponent } from './errors-summary.component';

describe('ErrorsSummaryComponent', () => {
  let component: ErrorsSummaryComponent;
  let fixture: ComponentFixture<ErrorsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
