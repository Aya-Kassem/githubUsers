import { createAction, props } from '@ngrx/store';
import { user, userSearhResponse } from '../../../../Core/Components/users/interface/user-interface';

export const getUsers = createAction('[Users Page] get All Users');

export const setUsers = createAction(
  '[Users Page] set All Users',
  props<userSearhResponse>()
);

export const getDefaultUsers = createAction(
    '[Users Page] No Users'
)

export const onSearchUser = createAction(
  '[Users Page] Search User',
  props<{ name: string }>()
)

export const onPagenationChange = createAction(
  '[Users Page] Page Selected',
  props<{ page: number, count: number }>()
)

export const getDefaultPagination = createAction(
  '[Users Page] Default Pagination Params'
)