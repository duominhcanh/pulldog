import { GitPullRequest, GitRepository } from "@/lib/git-provider";

export type BoardFilters = {
  showEmpty: boolean;
  focusedRepo: number | null;
};

export type BoardData = {
  repositories: (GitRepository & { pulls: GitPullRequest[] })[];
};
