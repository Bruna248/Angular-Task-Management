import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {App} from "./app";
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';
import { Card } from './shared/card/card';
import { NewTask } from './tasks/new-task/new-task';
import { Task } from './tasks/task/task';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        App, 
        Header, 
        Tasks, 
        User, 
        Card, 
        Task, 
        NewTask],
    imports: [BrowserModule, FormsModule], //you dont need to add the DatePipe here, because it's provided by BrowserModule | FormsModule is to use ngModel on NewTask component
    bootstrap: [App]
})
export class AppModule {

}