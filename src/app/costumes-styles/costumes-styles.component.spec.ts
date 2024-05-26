import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumesStylesComponent } from './costumes-styles.component';

describe('CostumesStylesComponent', () => {
  let component: CostumesStylesComponent;
  let fixture: ComponentFixture<CostumesStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumesStylesComponent]
    });
    fixture = TestBed.createComponent(CostumesStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
