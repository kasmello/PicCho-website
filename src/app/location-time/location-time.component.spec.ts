import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTimeComponent } from './location-time.component';

describe('LocationTimeComponent', () => {
  let component: LocationTimeComponent;
  let fixture: ComponentFixture<LocationTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationTimeComponent]
    });
    fixture = TestBed.createComponent(LocationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
