import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeferComponent } from './base-defer.component';

describe('BaseDeferComponent', () => {
  let component: BaseDeferComponent;
  let fixture: ComponentFixture<BaseDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
