import {  inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { GithubIntegrationService } from '../../Core/Services/github-integration.service';
import { catchError, map, of } from 'rxjs';
import { userDetails } from '../../Core/Components/users/interface/user-interface';
import { Store } from '@ngrx/store';
import { ChangeSpinnerVisability } from '../Store/spinner/spinner.actions';

export const userDetailsResolver: ResolveFn<userDetails | null> = (
  activatedRoute,
  routeState
) => {
    const userService = inject(GithubIntegrationService);
    const userName = activatedRoute.paramMap.get('name');
    const appStore = inject(Store<{ChangeSpinnerVisability: boolean }>);
    const router = inject(Router);

    return userService.getUserByName(userName!).pipe(
        map((userData) => {
            appStore.dispatch(ChangeSpinnerVisability({ isVisiable: false }));
            return userData;
        })
    );
};
