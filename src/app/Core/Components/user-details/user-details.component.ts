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
  //userDetails = input.required<userDetails>();

  info: userDetails = {
    login: 'Aya-Kassem',
    id: 90005145,
    node_id: 'MDQ6VXNlcjkwMDA1MTQ1',
    avatar_url: 'https://avatars.githubusercontent.com/u/90005145?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Aya-Kassem',
    html_url: 'https://github.com/Aya-Kassem',
    followers_url: 'https://api.github.com/users/Aya-Kassem/followers',
    following_url:
      'https://api.github.com/users/Aya-Kassem/following{/other_user}',
    gists_url: 'https://api.github.com/users/Aya-Kassem/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Aya-Kassem/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Aya-Kassem/subscriptions',
    organizations_url: 'https://api.github.com/users/Aya-Kassem/orgs',
    repos_url: 'https://api.github.com/users/Aya-Kassem/repos',
    events_url: 'https://api.github.com/users/Aya-Kassem/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Aya-Kassem/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false,
    name: 'Aya Kassem',
    company: 'T-Tech',
    blog: '',
    location: 'Giza',
    email: null,
    hireable: null,
    bio: 'Angular Developer',
    twitter_username: null,
    public_repos: 25,
    public_gists: 0,
    followers: 5,
    following: 7,
    created_at: '2021-09-02T19:56:24Z',
    updated_at: '2025-01-05T10:10:13Z',
  };
}
