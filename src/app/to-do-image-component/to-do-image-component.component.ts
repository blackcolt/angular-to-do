import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-image-component',
  templateUrl: './to-do-image-component.component.html',
  styleUrls: ['./to-do-image-component.component.css']
})
export class ToDoImageComponentComponent {
  @Input() image = ""
}
