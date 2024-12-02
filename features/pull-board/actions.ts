import { listPullRequests, listRepos } from "@/lib/octokit/actions";
import { PullRequestProps, ReposProps } from "@/lib/octokit/schema";
import { getSettings } from "../settings/actions";

export async function getPullBoardData(): Promise<{
  repos: (ReposProps & { pulls: PullRequestProps[] })[];
}> {
  const settings = await getSettings();
  const ghAccounts = settings.ghAccounts;

  const allRepos = [];

  for (const account of ghAccounts) {
    const repos = await listRepos(account.token);

    const pullsPromises = repos.map(async (repo) => {
      const pulls = await listPullRequests({
        token: account.token,
        owner: repo.owner.login,
        repo: repo.name,
      });

      return { id: repo.id, pulls };
    });

    const pullsData = await Promise.all(pullsPromises);

    const repoWithPulls = repos.map((repo) => ({
      ...repo,
      pulls: pullsData.find((pull) => pull.id === repo.id)?.pulls,
    }));

    allRepos.push(...repoWithPulls);
  }

  return {
    repos: allRepos as (ReposProps & { pulls: PullRequestProps[] })[],
  };
}
