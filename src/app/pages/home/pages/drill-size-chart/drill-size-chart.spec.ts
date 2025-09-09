import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillSizeChart } from './drill-size-chart';

describe('DrillSizeChart', () => {
  let component: DrillSizeChart;
  let fixture: ComponentFixture<DrillSizeChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrillSizeChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillSizeChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
