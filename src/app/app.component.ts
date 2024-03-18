import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { IUser, USERS } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // properties
  title = 'To-Do List Application';
  users: IUser[] = USERS;

  constructor() { }

  // methods
  changeTitle() {
    this.title += "!";
  }

  removeUser(id: number): void {
    const index = this.users.findIndex(x => x.id === id);
    if (index !== -1)
      this.users.splice(index, 1);
  }
}
