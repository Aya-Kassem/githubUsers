import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { user, userRequest } from '../users/interface/user-interface';
import { getUsers, onPagenationChange } from '../../../Shared/Store/users/users.actions/users.actions';
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
  appStore = inject(Store<{ searchUser: userRequest, users: user[] }>);
  constructor() {
    this.getUsersPagniation();
  }

  getUsersPagniation() {
    this.appStore
      .select('searchUser')
      .pipe(takeUntilDestroyed())
      .subscribe((request) => {
        this.rows = request.items;
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
