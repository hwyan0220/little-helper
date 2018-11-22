import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Message } from 'src/app/models/message';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
  @Input('messages')
  messages: Message[];
  constructor() { }

  ngOnInit() {

}





}
