import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent as MailPage } from './mail/index/index.component';
import { HomeComponent } from './home/home.component';
import { MessageBoxComponent } from './mail/message-box/message-box.component';
import { MessageDetailComponent } from './mail/message-detail/message-detail.component';
import { MessageCompactComponent } from './mail/message-compact/message-compact.component';
import { MessageCompactsComponent } from './mail/message-compacts/message-compacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  /*{
    path: 'messages',
    component: MailPage,
    children: [
      {
        path: ':mailBox',
        component: MailPage,
        children: [
          { path: ':messageId', component: MailPage }
        ]
      }
    ]
  },*/
  { path: 'messages', component: MailPage },
  { path: 'messages/:mailBox', component: MailPage },
  { path: 'messages/:mailBox/:messageId', component: MailPage },

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
