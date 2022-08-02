import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetrialComponent } from './datetrial.component';

describe('DatetrialComponent', () => {
  let component: DatetrialComponent;
  let fixture: ComponentFixture<DatetrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatetrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
