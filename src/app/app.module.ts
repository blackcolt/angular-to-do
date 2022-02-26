import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';
import { ToDoImageStackComponentComponent } from './to-do-image-stack-component/to-do-image-stack-component.component';
import { ToDoImageComponentComponent } from './to-do-image-component/to-do-image-component.component';
import { ToDoHeaderComponent } from './to-do-header/to-do-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponentComponent,
    ToDoComponentComponent,
    ToDoImageStackComponentComponent,
    ToDoImageComponentComponent,
    ToDoHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
