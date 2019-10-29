import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './mail/index/index.component';
import { MessageBoxComponent } from './mail/message-box/message-box.component';
import { MessageDetailComponent } from './mail/message-detail/message-detail.component';
import { MessageCompactComponent } from './mail/message-compact/message-compact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MessageBoxComponent,
    MessageDetailComponent,
    MessageCompactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
