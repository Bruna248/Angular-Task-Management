import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  private tasksService: TasksService;
  
  // Dependency injection of TasksService -> I "tell" Angular whitch type of value I need, and Angular provides it as an argument.
  // private creates the property with the same name as the parameter.
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}