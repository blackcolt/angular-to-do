import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent {

  toDos = [
    {
      id: "1",
      text: "to do HW",
      done: false
    },
    {
      id: "2",
      text: "to do more HW",
      done: true
    },
    {
      id: "3",
      text: "to do a lot more HW",
      done: false
    }
  ]
  addToDo(text: string, done: boolean = false){
    this.toDos.push({
      text,
      done,
      id: (this.toDos.length ++).toString(),
    })
  }
  markAsDoneToDo(id:string){
   console.log(id)
  }
}
