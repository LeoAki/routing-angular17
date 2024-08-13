import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoADeferComponent } from './hijo-a-defer.component';

describe('HijoADeferComponent', () => {
  let component: HijoADeferComponent;
  let fixture: ComponentFixture<HijoADeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoADeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoADeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
