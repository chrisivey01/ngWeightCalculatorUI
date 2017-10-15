import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskWeightPopUpComponent } from './ask-weight-pop-up.component';

describe('AskWeightPopUpComponent', () => {
  let component: AskWeightPopUpComponent;
  let fixture: ComponentFixture<AskWeightPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskWeightPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskWeightPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
