import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosRomanosComponent } from './dos-romanos.component';

describe('DosRomanosComponent', () => {
  let component: DosRomanosComponent;
  let fixture: ComponentFixture<DosRomanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosRomanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosRomanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
