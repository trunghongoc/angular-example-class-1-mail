import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent as MailPage } from './mail/index/index.component';
import { HomeComponent } from './home/home.component';

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
