import { RestEndpointMethodTypes } from "@octokit/rest";

// User
type GetAuthenticatedUserResponse =
  RestEndpointMethodTypes["users"]["getAuthenticated"]["response"];

export type UserProps = GetAuthenticatedUserResponse["data"];

// Repos
type ListReposResponse =
  RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"];

export type ReposProps = ListReposResponse["data"][number];

// Pull Requests
type ListPullRequestResponse =
  RestEndpointMethodTypes["pulls"]["list"]["response"];

export type PullRequestProps = ListPullRequestResponse["data"][number];
