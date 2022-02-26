import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-image-stack-component',
  templateUrl: './to-do-image-stack-component.component.html',
  styleUrls: ['./to-do-image-stack-component.component.css']
})
export class ToDoImageStackComponentComponent implements OnInit {
  images = [
    {
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp'
    },
    {
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp'
    },
    {
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'
    },
    {
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
