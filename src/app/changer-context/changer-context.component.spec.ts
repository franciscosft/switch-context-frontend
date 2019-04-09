import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerContextComponent } from './changer-context.component';

describe('ChangerContextComponent', () => {
  let component: ChangerContextComponent;
  let fixture: ComponentFixture<ChangerContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
