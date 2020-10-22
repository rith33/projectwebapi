import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcanComponent } from './logcan.component';

describe('LogcanComponent', () => {
  let component: LogcanComponent;
  let fixture: ComponentFixture<LogcanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogcanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
