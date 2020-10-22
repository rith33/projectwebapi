import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegempComponent } from './regemp.component';

describe('RegempComponent', () => {
  let component: RegempComponent;
  let fixture: ComponentFixture<RegempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
