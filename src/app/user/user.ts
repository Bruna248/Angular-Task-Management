import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { type UserType } from './user.model';
import { Card } from "../shared/card/card";


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})// o que eu meter dentro da class User vai estar disponivel no user.html
export class User {
  // @Input() is a decorator that markes a property as setable from outside the component
  // ! -> ts feature to tell the compiler that this property will be initialized by Angular, not here
  // required: true -> to make sure the input is provided
  @Input({required: true}) user!: UserType;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();   
  //select = output<string>();(the same as before, but using signal)

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
 