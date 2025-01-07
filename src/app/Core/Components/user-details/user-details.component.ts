import { Component, input, inject } from '@angular/core';
// import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { userDetails } from '../users/interface/user-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  standalone: true,
})
export class UserDetailsComponent {
  userDetails = input.required<userDetails>();
}
