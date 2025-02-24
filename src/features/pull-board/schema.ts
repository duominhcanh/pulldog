import { GitPullRequest, GitRepository } from "@/lib/git-provider";

export type BoardFilters = {
  empty: boolean;
  starred: boolean;
};

export type BoardData = {
  repositories: (GitRepository & { pulls: GitPullRequest[] })[];
};
