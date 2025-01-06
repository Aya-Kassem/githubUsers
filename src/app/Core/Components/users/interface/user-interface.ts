export interface user {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface userSearhResponse{
  total_count: number,
    "incomplete_results": boolean,
    items: user[]
}

export interface userDetails {
  login: string;
  id: number;
  avatar_url: string | null;
  html_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface userRequest {
  query: string,
  pageNumber: number,
  items: number
}
