import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailydevComponent } from './dailydev.component';

describe('DailydevComponent', () => {
  let component: DailydevComponent;
  let fixture: ComponentFixture<DailydevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailydevComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailydevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
