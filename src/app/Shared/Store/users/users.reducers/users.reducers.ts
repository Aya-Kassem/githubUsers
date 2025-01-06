import { user } from "../../../../Core/Components/users/interface/user-interface";
import { createDefaultObject } from "../../../Helpers/defaultObj";
import { createReducer, on } from '@ngrx/store';
import { getDefaultUsers, getUsers, setUsers } from '../users.actions/users.actions';
import { sortUsersAscending, sortUsersDescending } from "../../sort/sort.action";

export const usersState = [createDefaultObject<user>({
    login: '',
    avatar_url: '',
    html_url: ''
})];

export const usersReducers = createReducer(
    usersState,
    on(setUsers, (state, { users }) => users),
    on(getDefaultUsers, (state) => state),
    on(sortUsersAscending, (state) => state.slice().sort((a: user, b: user) => a.login.localeCompare(b.login))),
    on(sortUsersDescending, (state) => state.slice().sort((a: user, b: user) => b.login.localeCompare(a.login)))
);