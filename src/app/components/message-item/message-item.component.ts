import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  message: Message;
  isUser: boolean;

  constructor() { }

  ngOnInit() {
    this.isUser = this.message.avatar === 'assets/images/user.png';
    }

}
