import { Routes } from '@angular/router';
import { UsersComponent } from './Core/Components/users/users.component';
import { UserDetailsComponent } from './Core/Components/user-details/user-details.component';
import { userDetailsResolver } from './Shared/Helpers/userDetails.resolver';
import { NotFoundComponent } from './Core/Components/not-found/not-found.component';

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
    {
        path: 'userProfile/:name',
        component: UserDetailsComponent,
        resolve: {
            userDetails: userDetailsResolver
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
