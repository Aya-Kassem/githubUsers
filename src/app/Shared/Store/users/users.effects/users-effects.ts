import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { distinctUntilChanged, switchMap, tap, withLatestFrom } from 'rxjs';
import {
  getDefaultUsers,
  getUsers,
  setUsers,
} from '../users.actions/users.actions';
import { user } from '../../../../Core/Components/users/interface/user-interface';
import { GithubIntegrationService } from '../../../../Core/Services/github-integration.service';
import { isEqual } from 'lodash';

@Injectable()

export class UsersEffects {
  private readonly appStore = inject(Store<{ users: user[] }>);
  private githubService = inject(GithubIntegrationService);
  private actions$ = inject(Actions);
  constructor() {}

  getUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getUsers),
        withLatestFrom(this.appStore.select('searchUser')),
        distinctUntilChanged((prev, curr) => isEqual(prev[1], curr[1])),
        switchMap(([action, request]) => {
          return this.githubService
            .getAllUsers(request.query, request.pageNumber, request.items)
            .pipe(
              tap((result) => {
                result.length
                  ? this.appStore.dispatch(setUsers({ users: result }))
                  : this.appStore.dispatch(getDefaultUsers());
              })
            );
        })
      ),
    { dispatch: false }
  );
}
