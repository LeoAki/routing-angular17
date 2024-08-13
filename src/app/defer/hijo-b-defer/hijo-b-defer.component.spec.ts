import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoBDeferComponent } from './hijo-b-defer.component';

describe('HijoBDeferComponent', () => {
  let component: HijoBDeferComponent;
  let fixture: ComponentFixture<HijoBDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoBDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoBDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
