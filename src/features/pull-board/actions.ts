"use server";

import { decrypt } from "@/lib/crypto";
import { getProvider } from "@/lib/git-provider";
import { getAccounts } from "../account/actions";
import { BoardData } from "./schema";

export async function getPullBoardData(): Promise<BoardData> {
  const allRepos = [];
  const securedAccounts = await getAccounts();
  const accounts = securedAccounts.map((account) => ({
    token: decrypt(account.token),
    provider: account.provider,
  }));

  for (const account of accounts) {
    const provider = getProvider(account.provider);

    const repos = await provider.listRepos(account.token);

    const pullsPromises = repos.map(async (repo) => {
      const pulls = await provider.listPullRequests({
        token: account.token,
        owner: account.provider === "github" ? repo.owner!.login : undefined,
        repo: account.provider === "github" ? repo.name! : repo.id!,
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
    repositories: allRepos as BoardData["repositories"],
  };
}
