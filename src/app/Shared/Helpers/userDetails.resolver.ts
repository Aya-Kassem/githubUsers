import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GithubIntegrationService } from '../../Core/Services/github-integration.service';
import { map } from 'rxjs';
import { userDetails } from '../../Core/Components/users/interface/user-interface';

export const userDetailsResolver: ResolveFn<userDetails> = (
  activatedRoute,
  routeState
) => {
    const userService = inject(GithubIntegrationService);
    const userName = activatedRoute.paramMap.get('name');
    return userService.getUserByName(userName!).pipe(
        map((userData) => {
            return userData;
        })
    );
};
