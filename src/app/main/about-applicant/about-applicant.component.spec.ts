import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApplicantComponent } from './about-applicant.component';

describe('AboutApplicantComponent', () => {
  let component: AboutApplicantComponent;
  let fixture: ComponentFixture<AboutApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
