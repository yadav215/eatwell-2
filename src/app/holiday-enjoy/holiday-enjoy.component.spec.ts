import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayEnjoyComponent } from './holiday-enjoy.component';

describe('HolidayEnjoyComponent', () => {
  let component: HolidayEnjoyComponent;
  let fixture: ComponentFixture<HolidayEnjoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayEnjoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayEnjoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
