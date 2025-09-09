import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3d } from './service3d';

describe('Service3d', () => {
  let component: Service3d;
  let fixture: ComponentFixture<Service3d>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service3d]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service3d);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
