
import { createReducer, on } from '@ngrx/store';
import { sortUsersAscending, sortUsersDescending } from './sort.action';
export const sortDirection = 'Asc';

export const SortReducer = createReducer(
    sortDirection,
    on(sortUsersAscending, (state) => 'Asc'),
    on(sortUsersDescending, (state) => 'Desc')
);