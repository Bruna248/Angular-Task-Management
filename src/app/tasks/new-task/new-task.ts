import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  //enteredTitle = signal('');  -> using signals, but ngModel not compatible because of the two-way binding
  enteredTitle = 'Default Value';
  enteredSummary = '';
  enteredDate = '';

  // injecting the TasksService
  private tasksService = inject(TasksService);
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }
}
