import {  Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import {
  getDefaultUsers,
  getUsers,
  setUsers,
} from '../users.actions/users.actions';
import { user } from '../../../../Core/Components/users/interface/user-interface';
import { GithubIntegrationService } from '../../../../Core/Services/github-integration.service';

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
        tap(() => {
          this.githubService.getAllUsers('A', 1, 30).subscribe((result) => {
            result.length
              ? this.appStore.dispatch(setUsers({ users: result }))
              : this.appStore.dispatch(getDefaultUsers());
          });
        })
      ),
    { dispatch: false }
  );
}
