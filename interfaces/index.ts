interface GitData {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  status?: string;
}

export type { GitData };
