import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ShowErrorService {
    errorMsg$: Subject<string> = new Subject<string>();
    userDetailsError: boolean = false;
}