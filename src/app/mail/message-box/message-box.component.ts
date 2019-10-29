import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
  @Input() mailBoxs = [];

  constructor() { }

  ngOnInit() {
  }
}
