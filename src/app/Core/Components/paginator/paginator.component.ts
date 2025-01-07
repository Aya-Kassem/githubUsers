import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { user, userRequest, userSearhResponse } from '../users/interface/user-interface';
import { getUsers, onPagenationChange } from '../../../Shared/Store/users/actions/users.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  first: number = 0;
  rows!: number;
  appStore = inject(Store<{ searchUser: userRequest, users: userSearhResponse}>);
  usersCount!: number;

  constructor() {
    this.getUsersPagniation();
    this.getUsersCount();
  }

  getUsersPagniation() {
    this.appStore
      .select('searchUser')
      .pipe(takeUntilDestroyed())
      .subscribe((request) => {
        this.rows = request.items;
      });
  }

  getUsersCount(){
    this.appStore
      .select('users')
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        this.usersCount = result.total_count;
      });
  }

  onPageChange(event: PaginatorState) {
    const page = event.page! + 1;
    this.appStore.dispatch(
      onPagenationChange({ page: page, count: event.rows! })
    );
    this.appStore.dispatch(getUsers());
  }
}
