import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, distinctUntilChanged, finalize, of, switchMap, tap, withLatestFrom } from 'rxjs';
import {
  getDefaultPagination,
  getDefaultUsers,
  getUsers,
  setUsers,
} from '../actions/users.actions';
import { user } from '../../../../Core/Components/users/interface/user-interface';
import { GithubIntegrationService } from '../../../../Core/Services/github-integration.service';
import { isEqual } from 'lodash';
import { ChangeSpinnerVisability } from '../../spinner/spinner.actions';
import { userSearchResult } from '../state/state';

@Injectable()

export class UsersEffects {
  private readonly appStore = inject(Store<{ users: user[] }>);
  private githubService = inject(GithubIntegrationService);
  private actions$ = inject(Actions);
  constructor() {}

  // getUsers$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(getUsers),
  //       withLatestFrom(this.appStore.select('searchUser')),
  //       distinctUntilChanged((prev, curr) => isEqual(prev[1], curr[1])),
  //       switchMap(([action, request]) => {
  //         this.appStore.dispatch(ChangeSpinnerVisability({ isVisiable: true }));
  //         return this.githubService
  //           .getAllUsers(request.query, request.pageNumber, request.items)
  //           .pipe(
  //             tap((result) => {
  //               console.log(result);
  //               result!.total_count
  //                 ? this.appStore.dispatch(setUsers(result!))
  //                 : this.appStore.dispatch(getDefaultUsers());

  //                 this.appStore.dispatch(ChangeSpinnerVisability({ isVisiable: false }));
  //             })
  //           );
  //       })
  //     ),
  //   { dispatch: false }
  // );
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      withLatestFrom(this.appStore.select('searchUser')),
      distinctUntilChanged((prev, curr) => isEqual(prev[1], curr[1])),
      switchMap(([action, request]) => {
        this.appStore.dispatch(ChangeSpinnerVisability({ isVisiable: true }));
  
        let lastUsers!: typeof userSearchResult | null;
  
        return this.githubService.getAllUsers(request.query, request.pageNumber, request.items).pipe(
          tap((result) => {
            if (result?.total_count) {
              lastUsers = result;
              this.appStore.dispatch(setUsers(result));
            } else {
              this.appStore.dispatch(getDefaultPagination());
              this.appStore.dispatch(getDefaultUsers());
            }
          }),
          catchError((error) => {
            if (lastUsers) {
              this.appStore.dispatch(setUsers(lastUsers));
            } else {
              this.appStore.dispatch(getDefaultUsers());
            }
            return of(null);
          }),
          finalize(() => {
            this.appStore.dispatch(ChangeSpinnerVisability({ isVisiable: false }));
          })
        );
      })
    ),
    { dispatch: false }
  );
  
}
