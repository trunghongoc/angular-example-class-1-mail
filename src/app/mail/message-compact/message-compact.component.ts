import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-compact',
  templateUrl: './message-compact.component.html',
  styleUrls: ['./message-compact.component.scss']
})
export class MessageCompactComponent implements OnInit {
  @Input() messages: array = [];

  constructor() { }

  ngOnInit() {
  }

}
