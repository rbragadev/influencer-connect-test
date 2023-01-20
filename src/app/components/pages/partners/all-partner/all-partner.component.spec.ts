import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPartnerComponent } from './all-partner.component';

describe('AllPartnerComponent', () => {
  let component: AllPartnerComponent;
  let fixture: ComponentFixture<AllPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
