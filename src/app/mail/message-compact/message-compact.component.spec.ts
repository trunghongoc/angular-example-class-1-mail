import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCompactComponent } from './message-compact.component';

describe('MessageCompactComponent', () => {
  let component: MessageCompactComponent;
  let fixture: ComponentFixture<MessageCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
