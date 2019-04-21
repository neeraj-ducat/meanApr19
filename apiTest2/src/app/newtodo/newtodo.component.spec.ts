import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtodoComponent } from './newtodo.component';

describe('NewtodoComponent', () => {
  let component: NewtodoComponent;
  let fixture: ComponentFixture<NewtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
