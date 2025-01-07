import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { user, userDetails } from './interface/user-interface';
import { getUsers } from '../../../Shared/Store/users/users.actions/users.actions';
import { SearchUserComponent } from '../search-user/search-user.component';
import { UserCardComponent } from '../../../Shared/user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { sortUsersAscending } from '../../../Shared/Store/sort/sort.action';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SearchUserComponent,
    UserCardComponent,
    CommonModule,
    PaginatorComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  private appStore = inject(Store<{ users: user[] }>);
  users: user[] = [];
  ngOnInit() {
    this.appStore.dispatch(getUsers());
    this.appStore.dispatch(sortUsersAscending());
    this.appStore.select('users').subscribe((allUsers) => {
      this.users = allUsers;
    })
  }

  allUsers: userDetails[] = [
    {
      login: 'Aya-Kassem',
      id: 90005145,
      avatar_url: 'https://avatars.githubusercontent.com/u/90005145?v=4',
      html_url: 'https://github.com/Aya-Kassem',
      name: 'Aya Kassem',
      company: 'T-Tech',
      location: 'Giza',
      bio: null,
      public_repos: 25,
      followers: 5,
      following: 7,
    },
    {
      login: 'bitemyapp',
      id: 320177,
      avatar_url: 'https://avatars.githubusercontent.com/u/320177?v=4',
      html_url: 'https://github.com/bitemyapp',
      name: 'Chris A.',
      company: null,
      location: null,
      bio: '☦️',
      public_repos: 227,
      followers: 1036,
      following: 830,
    },
    {
      login: 'Super45coder',
      id: 80135238,
      avatar_url: 'https://avatars.githubusercontent.com/u/80135238?v=4',
      html_url: 'https://github.com/Super45coder',
      name: 'a',
      company: null,
      location: 'United States',
      bio: null,
      public_repos: 44,
      followers: 415,
      following: 1717,
    },
    {
      login: 'alsayadi',
      id: 1955591,
      avatar_url: 'https://avatars.githubusercontent.com/u/1955591?v=4',
      html_url: 'https://github.com/alsayadi',
      name: 'A.A',
      company: null,
      location: null,
      bio: null,
      public_repos: 40,
      followers: 93,
      following: 15,
    },
    {
      login: 'lesnitsky',
      id: 6261302,
      avatar_url: 'https://avatars.githubusercontent.com/u/6261302?v=4',
      html_url: 'https://github.com/lesnitsky',
      name: 'Andrei Lesnitsky',
      company: null,
      location: 'Poland, Gdańsk',
      bio: null,
      public_repos: 160,
      followers: 440,
      following: 114,
    },
    {
      login: 'NotHarshhaa',
      id: 112948305,
      avatar_url: 'https://avatars.githubusercontent.com/u/112948305?v=4',
      html_url: 'https://github.com/NotHarshhaa',
      name: 'H A R S H H A A',
      company: 'ProDevOpsGuy Tech Community',
      location: 'Hyderabad',
      bio: '𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝗮𝗻𝗱 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻 𝗲𝗻𝘁𝗵𝘂𝘀𝗶𝗮𝘀𝘁 | 𝗖𝗹𝗼𝘂𝗱 𝗮𝗻𝗱 𝗗𝗲𝘃𝗼𝗽𝘀 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿',
      public_repos: 34,
      followers: 1062,
      following: 0,
    },
  ];
}
