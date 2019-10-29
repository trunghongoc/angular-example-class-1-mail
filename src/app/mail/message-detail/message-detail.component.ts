import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  @Input() message: object;

  constructor() { }

  ngOnInit() {
  }

}
