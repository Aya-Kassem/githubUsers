import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  sortUsersAscending,
  sortUsersDescending,
} from '../../../Shared/Store/sort/sort.action';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { user } from '../users/interface/user-interface';
import { onSearchUser, getUsers, getDefaultUsers } from '../../../Shared/Store/users/actions/users.actions';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss',
})
export class SearchUserComponent {
  appStore = inject(Store<{ sorting: string; users: user[], ChangeSpinnerVisability: boolean }>);
  sortDirection: string = 'Asc';
  constructor() {
    this.getSortDirection();
  }

  getSortDirection() {
    this.appStore
      .select('sorting')
      .pipe(takeUntilDestroyed())
      .subscribe((dir) => {
        this.sortDirection = dir;
      });
  }

  getUser(name: string) {
    this.appStore.dispatch(onSearchUser({name: name}));
    this.appStore.dispatch(getUsers());
  }

  sortUsers() {
    this.sortDirection === 'Asc'
      ? this.appStore.dispatch(sortUsersDescending())
      : this.appStore.dispatch(sortUsersAscending());
  }

}
