import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMainpageComponent } from './emp-mainpage.component';

describe('EmpMainpageComponent', () => {
  let component: EmpMainpageComponent;
  let fixture: ComponentFixture<EmpMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
