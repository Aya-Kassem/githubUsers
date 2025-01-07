import {
  user,
} from '../../../../Core/Components/users/interface/user-interface';
import { createReducer, on } from '@ngrx/store';
import {
  getDefaultPagination,
  getDefaultUsers,
  onPagenationChange,
  onSearchUser,
  setUsers,
} from '../actions/users.actions';
import {
  sortUsersAscending,
  sortUsersDescending,
} from '../../sort/sort.action';
import { userSearchResult, usersSearchRequestInit } from '../state/state';


export const usersReducers = createReducer(
  userSearchResult,
  on(setUsers, (state, { items, total_count }) => ({
    ...state,
    items,
    total_count,
  })),
  on(getDefaultUsers, (state) => state),
  on(sortUsersAscending, (state) => ({
    ...state,
    items: state.items
      .slice()
      .sort((a: user, b: user) => a.login.localeCompare(b.login)),
  })),
  on(sortUsersDescending, (state) => ({
    ...state,
    items: state.items
      .slice()
      .sort((a: user, b: user) => b.login.localeCompare(a.login)),
  }))
);

export const userSearchReducer = createReducer(
  usersSearchRequestInit,
  on(onSearchUser, (state, { name }) => ({ ...state, query: name })),
  on(onPagenationChange, (state, { page, count }) => ({
    ...state,
    pageNumber: page,
    items: count,
  })),
  on(getDefaultPagination, (state) => {
    return {
      ...state,
      pageNumber: 1,
      items: 15,
    };
  })
);
