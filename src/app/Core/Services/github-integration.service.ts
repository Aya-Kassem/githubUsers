import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import {
  user,
  userDetails,
} from '../Components/users/interface/user-interface';

@Injectable({
  providedIn: 'root',
})
export class GithubIntegrationService {
  private readonly mainUrl: string = 'https://api.github.com/';
  private readonly httpClient = inject(HttpClient);

  getAllUsers(name: string = 'A', page: number, limit: number): Observable<user[]> {
    return this.httpClient.get<user[]>(`${this.mainUrl}users?q=${name}&page=${page}&per_page=${limit}`);
  }

  getUserByName(name: string): Observable<userDetails> {
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
        }))
      );
  }
}
