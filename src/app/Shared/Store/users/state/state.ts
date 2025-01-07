import { user, userSearhResponse } from "../../../../Core/Components/users/interface/user-interface";
import { createDefaultObject } from "../../../Helpers/defaultObj";

export const usersState = [
  createDefaultObject<user>({
    login: '',
    avatar_url: '',
    html_url: '',
  }),
];

export const usersSearchRequestInit = {
  query: 'A',
  pageNumber: 1,
  items: 15,
};

export const userSearchResult = createDefaultObject<userSearhResponse>({
  items: usersState,
  total_count: 0,
});