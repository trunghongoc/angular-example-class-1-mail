import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

import fakeMessages from './../messages.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private users: array = [
    'devguy@angular.dev',
    'devgal@angular.dev',
    'myself@angular.dev',
    'woodard.ellison@two-cities.extremo.name',
    'roy.bass@elflore.calcula.com',
    'case.hughes@cat-in-the-hat.premiant.biz',
    'shanna.huber@macbeth.terrago.io'
  ];
  private user: string = this.users[0];
  private mailBoxs = [];
  private messages = [];
  private messageCompacts = [];
  private currentMessages = [];
  private messageDetail;
  private params = {};

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.initData()
    this.watchRouteChange();
  }

  watchRouteChange() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.initData();
      }
    });
  }

  initData() {
    this.getRouteParams();
  }

  getRouteParams() {
    this.route.params.subscribe(params => {
      this.params = params;
      this.getMailBoxs();
    });
  }

  handleSwitchToAnotherUser(user: string) {
    this.user = user;
    this.getMailBoxs();
  }

  hasAuthen(mess: object) {
    return mess.from.indexOf(this.user) !== -1 || mess.to === this.user;
  }

  getMailBoxs() {
    console.log('---ddhdhh')
    const mailBoxs = [];
    const messages = [];
    fakeMessages.forEach(mess => {
      if (this.hasAuthen(mess)) {
        mailBoxs.push(mess.folder);
        messages.push(mess);
      }
    });

    this.mailBoxs = [...new Set(mailBoxs)];
    this.messages = messages;
    const mailBox = this.params.mailBox || this.mailBoxs[0];
    console.log('---mailbox:', mailBox);
    this.getMessageCompacts(this.mailBoxs[mailBox]);
  }

  getMessageCompacts(boxName: string) {
    if (!boxName)
      this.messageCompacts = [];
    else
      this.messageCompacts = this.messages.filter(mess => mess.folder === boxName);
  }
}
