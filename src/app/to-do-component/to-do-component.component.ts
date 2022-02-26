import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.css']
})
export class ToDoComponentComponent {
  @Input() text = "";
  @Input() id = "";
  @Input() isDone = false;
  @Output() toDoDoneEvent = new EventEmitter<string>();
  toggleIsDone(){
    this.isDone = !this.isDone;
    this.toDoDoneEvent.emit(this.id);
  }
}
