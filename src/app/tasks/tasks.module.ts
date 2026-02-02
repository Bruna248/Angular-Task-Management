import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Tasks } from './tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    Tasks, 
    Task, 
    NewTask],
  imports: [CommonModule, SharedModule, FormsModule], //CommonModule and BrowserModule has the DatePipe, but BrowserModule can only be used by the root module | FormsModule is to use ngModel on NewTask component
  exports: [Tasks]
})
export class TasksModule {

}