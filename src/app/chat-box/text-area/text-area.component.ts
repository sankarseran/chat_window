import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() message: string | undefined;
  @Output() messageChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.messageChange.emit(this.message);
  }

}
