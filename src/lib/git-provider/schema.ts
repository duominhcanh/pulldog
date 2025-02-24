export type GitUser = {
  id?: string | number;
  name?: string;
  login?: string;
  avatarUrl?: string;
  webUrl?: string;
};

export type GitRepository = {
  id?: string | number;
  owner?: GitUser;
  webUrl?: string;
  name?: string;
};

export type GitPullRequest = {
  id?: string | number;
  number: number;
  draft?: boolean;
  state?: string;
  webUrl?: string;
  name?: string;
  author?: GitUser;
  assignees?: GitUser[];
};

export interface GitProvider {
  getCurrentUser(token: string): Promise<GitUser | null>;
  listRepos(request: {
    token: string;
    options: {
      starred: boolean;
    };
  }): Promise<GitRepository[]>;
  listPullRequests({
    token,
    owner,
    repo,
  }: {
    token: string;
    owner?: string;
    repo: string | number;
  }): Promise<GitPullRequest[]>;
}
