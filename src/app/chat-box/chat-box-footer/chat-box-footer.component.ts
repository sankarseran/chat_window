import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-box-footer',
  templateUrl: './chat-box-footer.component.html',
  styleUrls: ['./chat-box-footer.component.scss']
})
export class ChatBoxFooterComponent implements OnInit {
  @Output() sendMessage = new EventEmitter<string>();
  @Output() image = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  sendMsg() {
    this.sendMessage.emit('send');
  }
  onSelectFile(event: any) {
    this.image.emit(event);
  }
}
