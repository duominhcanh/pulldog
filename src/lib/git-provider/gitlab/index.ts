import axios from "axios";
import { GitProvider, GitPullRequest, GitRepository, GitUser } from "../schema";
import { GitlabMergeRequest, GitlabProject, GitlabUser } from "./schema";
import { mapState } from "./utils";

export const gitlab: GitProvider = {
  getCurrentUser: async (token) => {
    // https://docs.gitlab.com/api/users/#get-the-current-user
    const response = await axios.get<GitlabUser>(
      "https://gitlab.com/api/v4/user",
      {
        params: {
          private_token: token,
        },
      },
    );

    if (!response.data) {
      return null;
    }

    const data = response.data;

    const gitUser: GitUser = {
      id: data.id,
      login: data.username,
      name: data.name,
      avatarUrl: data.avatar_url,
      webUrl: data.web_url,
    };

    return gitUser;
  },
  listRepos: async function ({
    token,
    options: { starred = false },
  }): Promise<GitRepository[]> {
    // https://docs.gitlab.com/api/projects/#list-projects
    const response = await axios.get<GitlabProject[]>(
      "https://gitlab.com/api/v4/projects",
      {
        params: {
          private_token: token,
          membership: true,
          simple: true,
          archived: false,
          starred: starred,
        },
      },
    );

    const data = response.data;

    const gitRepos: GitRepository[] = data.map((project) => ({
      id: project.id,
      webUrl: project.web_url,
      name: project.name,
      owner: {
        id: project.namespace.id,
        login: project.namespace.full_path,
        name: project.namespace.name,
        avatarUrl: project.namespace.avatar_url ?? undefined,
        webUrl: project.namespace.web_url,
      },
    }));

    return gitRepos;
  },
  listPullRequests: async function ({
    token,
    repo,
  }: {
    token: string;
    owner: string;
    repo: string;
  }): Promise<GitPullRequest[]> {
    // https://docs.gitlab.com/api/merge_requests/#list-merge-requests
    const response = await axios.get<GitlabMergeRequest[]>(
      `https://gitlab.com/api/v4/projects/${repo}/merge_requests`,
      {
        params: {
          private_token: token,
          state: "opened",
        },
      },
    );

    const data = response.data;
    const gitPullRequests: GitPullRequest[] = data.map((mr) => ({
      id: mr.id,
      number: mr.iid,
      draft: mr.work_in_progress,
      state: mapState(mr.state),
      webUrl: mr.web_url,
      name: mr.title,
      assignees: mr.assignees.map((assignee) => ({
        id: assignee.id,
        login: assignee.username,
        name: assignee.name,
        avatarUrl: assignee.avatar_url,
        webUrl: assignee.web_url,
      })),
      author: {
        id: mr.author.id,
        login: mr.author.username,
        name: mr.author.name,
        avatarUrl: mr.author.avatar_url,
        webUrl: mr.author.web_url,
      },
    }));

    return gitPullRequests;
  },
};
