import { Octokit } from "@octokit/rest";
import { GitProvider, GitPullRequest, GitRepository, GitUser } from "../schema";

export const github: GitProvider = {
  getCurrentUser: async (token) => {
    const octokit = new Octokit({
      auth: token,
    });

    try {
      const { data: user } = await octokit.users.getAuthenticated();

      if (!user) {
        return null;
      }

      const gitUser: GitUser = {
        id: user.id,
        login: user.login,
        name: user.name ?? undefined,
        avatarUrl: user.avatar_url,
        webUrl: user.html_url,
      };

      return gitUser;
    } catch {
      return null;
    }
  },
  listRepos: async (token: string): Promise<GitRepository[]> => {
    const octokit = new Octokit({
      auth: token,
    });

    try {
      const { data: repos } = await octokit.repos.listForAuthenticatedUser({});
      return (repos ?? []).map((repo) => ({
        id: repo.id,
        owner: {
          id: repo.owner.id,
          login: repo.owner.login,
          name: repo.owner.name ?? undefined,
          avatarUrl: repo.owner.avatar_url ?? undefined,
          webUrl: repo.owner.html_url,
        },
        name: repo.name,
        webUrl: repo.html_url,
      }));
    } catch {
      return [];
    }
  },
  listPullRequests: async ({
    token,
    owner,
    repo,
  }: {
    token: string;
    owner?: string;
    repo: string;
  }): Promise<GitPullRequest[]> => {
    const octokit = new Octokit({
      auth: token,
    });

    try {
      const { data: pulls } = await octokit.pulls.list({ owner: owner!, repo });
      return (pulls ?? []).map((pull) => ({
        id: pull.id,
        number: pull.number,
        draft: pull.draft,
        state: pull.state,
        webUrl: pull.html_url,
        name: pull.title,
        assignees: pull.assignee
          ? [
              {
                id: pull.assignee?.id,
                login: pull.assignee?.login,
                name: pull.assignee?.name ?? undefined,
                avatarUrl: pull.assignee?.avatar_url ?? undefined,
                webUrl: pull.assignee?.html_url,
              },
            ]
          : [],
        author: {
          id: pull.user?.id,
          login: pull.user?.login,
          name: pull.user?.name ?? undefined,
          avatarUrl: pull.user?.avatar_url ?? undefined,
          webUrl: pull.user?.html_url,
        },
      }));
    } catch {
      return [];
    }
  },
};
