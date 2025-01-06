import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { userSearchReducer, usersReducers } from './Shared/Store/users/users.reducers/users.reducers';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './Shared/Store/users/users.effects/users-effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SortReducer } from './Shared/Store/sort/sort.reducer';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideStore({
      'users': usersReducers,
      'sorting': SortReducer,
      'searchUser': userSearchReducer
    }),
    provideEffects([
      UsersEffects
    ]),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })
  ],
};
