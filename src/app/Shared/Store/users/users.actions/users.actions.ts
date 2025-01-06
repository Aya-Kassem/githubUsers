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

export const onSearchUser = createAction(
  '[Main Page] Search User',
  props<{ name: string }>()
)

export const onPagenationChange = createAction(
  '[Main Page] Page Selected',
  props<{ page: number, count: number }>()
)