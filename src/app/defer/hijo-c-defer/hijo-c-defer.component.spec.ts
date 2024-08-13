import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoCDeferComponent } from './hijo-c-defer.component';

describe('HijoCDeferComponent', () => {
  let component: HijoCDeferComponent;
  let fixture: ComponentFixture<HijoCDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoCDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoCDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
