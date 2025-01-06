import { Routes } from '@angular/router';
import { UsersComponent } from './Core/Components/users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'githubUsers',
        pathMatch: 'full'
    },
    {
        path: 'githubUsers',
        component: UsersComponent
    },
    // {
    //     path: 'userProfile:id',
    //     component: 
    // }
];
