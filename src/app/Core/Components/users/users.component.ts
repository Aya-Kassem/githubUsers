import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  user,
  userDetails,
  userSearhResponse,
} from './interface/user-interface';
import { getUsers } from '../../../Shared/Store/users/actions/users.actions';
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
  private appStore = inject(Store<{ users: userSearhResponse }>);
  users: user[] = [];
  ngOnInit() {
    this.appStore.dispatch(getUsers());
    this.appStore.dispatch(sortUsersAscending());
    this.appStore.select('users').subscribe((allUsers) => {
        this.users = allUsers.items;
    });
  }
}
