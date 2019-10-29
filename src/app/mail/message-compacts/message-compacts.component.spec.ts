import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCompactsComponent } from './message-compacts.component';

describe('MessageCompactsComponent', () => {
  let component: MessageCompactsComponent;
  let fixture: ComponentFixture<MessageCompactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCompactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCompactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
