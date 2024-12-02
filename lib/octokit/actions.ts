import { Octokit } from "@octokit/rest";
import { PullRequestProps, ReposProps, UserProps } from "./schema";

export async function listRepos(token: string): Promise<ReposProps[]> {
  const octokit = new Octokit({
    auth: token,
  });

  try {
    const { data: repos } = await octokit.repos.listForAuthenticatedUser({});
    return repos ?? [];
  } catch {
    return [];
  }
}

export async function listPullRequests({
  token,
  owner,
  repo,
}: {
  token: string;
  owner: string;
  repo: string;
}): Promise<PullRequestProps[]> {
  const octokit = new Octokit({
    auth: token,
  });

  try {
    const { data: pulls } = await octokit.pulls.list({ owner, repo });
    return pulls ?? [];
  } catch {
    return [];
  }
}

export async function getUser(token: string): Promise<UserProps | undefined> {
  const octokit = new Octokit({
    auth: token,
  });

  try {
    const { data: user } = await octokit.users.getAuthenticated();
    return user ?? undefined;
  } catch {
    return undefined;
  }
}
