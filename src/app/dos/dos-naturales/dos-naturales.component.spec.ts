import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosNaturalesComponent } from './dos-naturales.component';

describe('DosNaturalesComponent', () => {
  let component: DosNaturalesComponent;
  let fixture: ComponentFixture<DosNaturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosNaturalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosNaturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
