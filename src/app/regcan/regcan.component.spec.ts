import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcanComponent } from './regcan.component';

describe('RegcanComponent', () => {
  let component: RegcanComponent;
  let fixture: ComponentFixture<RegcanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegcanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
