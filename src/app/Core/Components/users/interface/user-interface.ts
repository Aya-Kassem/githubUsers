export interface user {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export interface userDetails {
  login: string;
  id: number;
  node_id: string | null;
  avatar_url: string | null;
  gravatar_id: string | null;
  url: string | null;
  html_url: string;
  followers_url: string | null;
  following_url: string | null;
  gists_url: string | null;
  starred_url: string | null;
  subscriptions_url: string | null;
  organizations_url: string | null;
  repos_url: string | null;
  events_url: string | null;
  received_events_url: string | null;
  type: string | null;
  user_view_type: string | null;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: string | null | boolean;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string | null;
  updated_at: string | null;
}
