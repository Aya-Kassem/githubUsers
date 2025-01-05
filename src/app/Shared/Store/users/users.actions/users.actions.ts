import { createAction, props } from '@ngrx/store';
import { user } from '../../../../Core/Components/users/interface/user-interface';

export const getUsers = createAction('[Users Page] get All Users');

export const setUsers = createAction(
  '[Users Page] set All Users',
  props<{ users: user[] }>()
);

export const getDefaultUsers = createAction(
    '[Main Page] No Users'
)