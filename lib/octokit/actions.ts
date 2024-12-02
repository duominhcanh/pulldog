import { Octokit } from "@octokit/rest";
import { PullRequestProps, ReposProps, UserProps } from "./schema";

export async function listRepos(token: string): Promise<ReposProps[]> {
  // const repoList = await (await fetch(`http://localhost:9877/repos`)).json();

  // return repoList;

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
  // const repoList = await (
  //   await fetch(`http://localhost:9877/repos?name=${repo}`)
  // ).json();

  // return repoList[0].pulls;

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
  // const usersList = await (await fetch(`http://localhost:9877/users`)).json();

  // return usersList[0];

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
