import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-header',
  templateUrl: './to-do-header.component.html',
  styleUrls: ['./to-do-header.component.css']
})
export class ToDoHeaderComponent {
  @Input() subtitle: string = ""
  @Input() teamId: string = ""
  @Input() title: string = ""
  @Input() date: string = ""
}