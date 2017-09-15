import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBoxComponent } from './calc-box.component';

describe('CalcBoxComponent', () => {
  let component: CalcBoxComponent;
  let fixture: ComponentFixture<CalcBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
