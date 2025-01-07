import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import {
  user,
  userDetails,
  userSearhResponse,
} from '../Components/users/interface/user-interface';
import { ShowErrorService } from '../../Shared/Helpers/error.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getDefaultPagination, getUsers } from '../../Shared/Store/users/actions/users.actions';
import { errStatus } from '../../Shared/Helpers/errStatusMessages';

@Injectable({
  providedIn: 'root',
})
export class GithubIntegrationService {
  private readonly mainUrl: string = 'https://api.github.com/';
  private readonly httpClient = inject(HttpClient);
  private errService = inject(ShowErrorService);
  router = inject(Router);
  appStore = inject(Store<{ users: userSearhResponse }>);

  getAllUsers(
    name: string = 'A',
    page: number,
    limit: number
  ): Observable<userSearhResponse | null> {
    return this.httpClient
      .get<userSearhResponse>(
        `${this.mainUrl}search/users?q=${name}&page=${page}&per_page=${limit}`
      )
      .pipe(
        map((result) => ({
          total_count: result.total_count,
          items: result.items,
        })),
        catchError((error) => {
          let message = errStatus(error);
          if(message) this.errService.errorMsg$.next(message);
          this.appStore.dispatch(getUsers());
          this.router.navigate(['/AllUsers']);
          return of(null);
        })
      );
  }

  getUserByName(name: string): Observable<userDetails | null> {
    return this.httpClient
      .get<userDetails>(`${this.mainUrl}users/${name}`)
      .pipe(
        map((result) => ({
          login: result.login,
          id: result.id,
          avatar_url: result.avatar_url,
          html_url: result.html_url,
          name: result.name,
          company: result.company,
          location: result.location,
          bio: result.bio,
          public_repos: result.public_repos,
          followers: result.followers,
          following: result.following,
        })),
        catchError((error) => {
          let message = errStatus(error);
          if(message) this.errService.errorMsg$.next(message);
          this.appStore.dispatch(getUsers());
          this.router.navigate(['/AllUsers']);
          return of(null);
        })
      );
  }
}
