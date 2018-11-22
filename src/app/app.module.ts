import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { FormsModule } from '@angular/forms';
import { DialogflowService } from './services/dialogflow.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
