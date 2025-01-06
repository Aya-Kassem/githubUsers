import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { user, userDetails } from "../Components/users/interface/user-interface";

@Injectable({
    providedIn:'root'
})

export class GithubIntegrationService {
    private readonly mainUrl: string = 'https://api.github.com/';
    private readonly httpClient = inject(HttpClient);

    getAllUsers(): Observable<user[]>{
        return this.httpClient.get<user[]>(`${this.mainUrl}users`);
    }

    getUserByName(name: string): Observable<userDetails>{
        return this.httpClient.get<userDetails>(`${this.mainUrl}users/${name}`)
    }
}