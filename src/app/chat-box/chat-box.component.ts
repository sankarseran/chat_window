import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  @ViewChild('chatsContainer') chatsContainer: ElementRef | any;
  isChatOpen = false;
  chats: any;
  message: any | undefined;
  constructor() { }

  ngOnInit(): void {
    this.chats = [
      {message: 'Hi!', type: 'str'},
      {message: 'Hello..', type: 'str'}
    ];
  }

  actionChatBox() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage(event: any) {
    if (this.message?.trim()?.length) {
      this.chats.push({message: this.message, type: 'str'});
      this.message = '';
      this.scrollToBottom();
    }
    
  }

  onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.chats.push({message: event?.target?.result, type: 'img'});
        this.scrollToBottom();
      }
    }
  }

  scrollToBottom() {
    try {
      this.chatsContainer.nativeElement.scrollTop = this.chatsContainer.nativeElement.scrollHeight + 50;
    } catch(err) { 
      console.log('err', err);
    } 
  }
}
