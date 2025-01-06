import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { user } from "../Components/users/interface/user-interface";

@Injectable({
    providedIn:'root'
})

export class GithubIntegrationService {
    private readonly mainUrl: string = 'https://api.github.com/';
    private readonly httpClient = inject(HttpClient);

    getAllUsers(): Observable<user[]>{
        return this.httpClient.get<user[]>(`${this.mainUrl}users`);
    }
}