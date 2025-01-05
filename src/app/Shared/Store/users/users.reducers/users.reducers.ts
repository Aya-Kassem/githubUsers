import { user } from "../../../../Core/Components/users/interface/user-interface";
import { createDefaultObject } from "../../../Helpers/defaultObj";
import { createReducer, on } from '@ngrx/store';
import { getDefaultUsers, getUsers, setUsers } from '../users.actions/users.actions';

export const usersState = [createDefaultObject<user>({
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    user_view_type: '',
    site_admin: false
})];

export const usersReducers = createReducer(
    usersState,
    on(setUsers, (state, { users }) => users),
    on(getDefaultUsers, (state) => state)
);