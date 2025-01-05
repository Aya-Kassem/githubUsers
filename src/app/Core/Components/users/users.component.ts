import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { user } from './interface/user-interface';
import { getUsers } from '../../../Shared/Store/users/users.actions/users.actions';
import { SearchUserComponent } from '../search-user/search-user.component';
import { UserCardComponent } from '../../../Shared/user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SearchUserComponent, UserCardComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  private appStore = inject(Store<{ users: user[] }>);

  ngOnInit() {
    // this.appStore.dispatch(getUsers());
    // this.appStore.select('users').subscribe((d) => {
    //   console.log(d);
    // })
  }

  users = [
    {
      login: 'mojombo',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mojombo',
      html_url: 'https://github.com/mojombo',
      followers_url: 'https://api.github.com/users/mojombo/followers',
      following_url:
        'https://api.github.com/users/mojombo/following{/other_user}',
      gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
      organizations_url: 'https://api.github.com/users/mojombo/orgs',
      repos_url: 'https://api.github.com/users/mojombo/repos',
      events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mojombo/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
    },
    {
      login: 'defunkt',
      id: 2,
      node_id: 'MDQ6VXNlcjI=',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/defunkt',
      html_url: 'https://github.com/defunkt',
      followers_url: 'https://api.github.com/users/defunkt/followers',
      following_url:
        'https://api.github.com/users/defunkt/following{/other_user}',
      gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
      organizations_url: 'https://api.github.com/users/defunkt/orgs',
      repos_url: 'https://api.github.com/users/defunkt/repos',
      events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/defunkt/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
    },
    {
      login: 'pjhyett',
      id: 3,
      node_id: 'MDQ6VXNlcjM=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pjhyett',
      html_url: 'https://github.com/pjhyett',
      followers_url: 'https://api.github.com/users/pjhyett/followers',
      following_url:
        'https://api.github.com/users/pjhyett/following{/other_user}',
      gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
      organizations_url: 'https://api.github.com/users/pjhyett/orgs',
      repos_url: 'https://api.github.com/users/pjhyett/repos',
      events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pjhyett/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
    },
    {
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
      subscriptions_url:
        'https://api.github.com/users/Aya-Kassem/subscriptions',
      organizations_url: 'https://api.github.com/users/Aya-Kassem/orgs',
      repos_url: 'https://api.github.com/users/Aya-Kassem/repos',
      events_url: 'https://api.github.com/users/Aya-Kassem/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Aya-Kassem/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false
    },
  ];
}
