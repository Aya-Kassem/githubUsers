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

  info: userDetails = {
    login: 'Aya-Kassem',
    id: 90005145,
    avatar_url: 'https://avatars.githubusercontent.com/u/90005145?v=4',
    html_url: 'https://github.com/Aya-Kassem',
    name: 'Aya Kassem',
    company: 'T-Tech',
    location: 'Giza',
    bio: 'Angular Developer',
    public_repos: 25,
    followers: 5,
    following: 7
  };
}
