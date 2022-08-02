import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsNMarkerComponent } from './maps-n-marker.component';

describe('MapsNMarkerComponent', () => {
  let component: MapsNMarkerComponent;
  let fixture: ComponentFixture<MapsNMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsNMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsNMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
