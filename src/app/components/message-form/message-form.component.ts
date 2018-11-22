import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { DialogflowService } from 'src/app/services/dialogflow.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  message: Message;

  @Input('messages')
  messages: Message[];
  welcomeMsg = 'Hello, I am Norman\'s assistant Jasper. I can help you \
  get around this tool, show performance metrics or even book a restaurant';
  constructor(private dialogFlowService: DialogflowService) { }
  ngOnInit() {
    this.welcome();
  }

  public welcome(): void {
      this.messages.push(
        new Message(
          this.welcomeMsg, 'assets/images/bot.jpeg', new Date())
      );
    }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      console.log(res);
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.jpeg', res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png');
}

}
