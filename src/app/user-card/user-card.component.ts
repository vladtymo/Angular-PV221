import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../user';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { UpperFirstPipe } from "../upper-first.pipe";

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  imports: [LowerCasePipe, UpperCasePipe, DatePipe, UpperFirstPipe]
})
export class UserCardComponent {
  @Input() user: IUser = {
    id: 0,
    email: "",
    name: "",
    admin: false
  };

  @Output() removeEvent = new EventEmitter<number>();

  changeRole(): void {
    this.user.admin = !this.user.admin;
  }

  remove(): void {
    this.removeEvent.emit(this.user.id);
  }
}
