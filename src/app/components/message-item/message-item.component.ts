import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';


@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  message: Message;

  constructor() { }

  ngOnInit() {
  }

}
