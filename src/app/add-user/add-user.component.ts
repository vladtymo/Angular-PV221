import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../user';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  @Output() submitEvent = new EventEmitter<IUser>();

  creationForm = this.fb.group({
    id: [0],
    name: ['', Validators.minLength(3)],
    email: ['', Validators.email],
    admin: [false],
    birthdate: [new Date()],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {

    // check model is valid
    if (!this.creationForm.valid) {
      alert("Invalid data!");
      return;
    }

    // get created user
    const user = this.creationForm.value as IUser;
    // send new user to parent component
    this.submitEvent.emit(user);
  }
}
