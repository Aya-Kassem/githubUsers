import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { usersReducers } from './Shared/Store/users/users.reducers/users.reducers';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './Shared/Store/users/users.effects/users-effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
// import { SortingUsersEffects } from './Shared/Store/sort/sort.effect';
import { SortReducer } from './Shared/Store/sort/sort.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideStore({
      'users': usersReducers,
      'sorting': SortReducer
    }),
    provideEffects([
      UsersEffects
    ]),
    provideHttpClient(withFetch()),
    
  ],
};
