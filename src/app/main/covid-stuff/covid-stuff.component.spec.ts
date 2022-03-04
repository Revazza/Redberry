import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStuffComponent } from './covid-stuff.component';

describe('CovidStuffComponent', () => {
  let component: CovidStuffComponent;
  let fixture: ComponentFixture<CovidStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
