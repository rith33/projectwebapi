import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanMainpageComponent } from './can-mainpage.component';

describe('CanMainpageComponent', () => {
  let component: CanMainpageComponent;
  let fixture: ComponentFixture<CanMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
