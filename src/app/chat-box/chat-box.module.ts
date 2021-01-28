import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBoxComponent } from './chat-box.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ChatBoxFooterComponent } from './chat-box-footer/chat-box-footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatBoxComponent,
    TextAreaComponent,
    ProfileDetailsComponent,
    ChatBoxFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChatBoxComponent,
    TextAreaComponent,
    ProfileDetailsComponent,
    ChatBoxFooterComponent
  ]
})
export class ChatBoxModule { }
