import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPartnerFormComponent } from './new-partner-form.component';

describe('NewPartnerFormComponent', () => {
  let component: NewPartnerFormComponent;
  let fixture: ComponentFixture<NewPartnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPartnerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPartnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
