export type GitlabIdentity = {
  provider: string;
  extern_uid: string;
  saml_provider_id: number | null;
};

export type GitlabNamespace = {
  id: number;
  name: string;
  path: string;
  kind: string;
  full_path: string;
  parent_id: number;
  avatar_url: string | null;
  web_url: string;
};

export type GitlabReference = {
  short: string;
  relative: string;
  full: string;
};

export type GitlabTimeStats = {
  time_estimate: number;
  total_time_spent: number;
  human_time_estimate: string | null;
  human_total_time_spent: string | null;
};

export type GitlabTaskCompletionStatus = {
  count: number;
  completed_count: number;
};

export type GitlabUser = {
  id: number;
  username: string;
  name: string;
  state: string;
  locked: boolean;
  avatar_url: string;
  web_url: string;
  created_at: string;
  bio: string;
  location: string;
  public_email: string | null;
  skype: string;
  linkedin: string;
  twitter: string;
  discord: string;
  website_url: string;
  organization: string;
  job_title: string;
  pronouns: string | null;
  bot: boolean;
  work_information: string | null;
  local_time: string | null;
  last_sign_in_at: string;
  confirmed_at: string;
  last_activity_on: string;
  email: string;
  theme_id: number;
  color_scheme_id: number;
  projects_limit: number;
  current_sign_in_at: string;
  identities: GitlabIdentity[];
  can_create_group: boolean;
  can_create_project: boolean;
  two_factor_enabled: boolean;
  external: boolean;
  private_profile: boolean;
  commit_email: string;
  shared_runners_minutes_limit: number | null;
  extra_shared_runners_minutes_limit: number | null;
  scim_identities: unknown[];
};

export type GitlabProject = {
  id: number;
  description: string | null;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  created_at: string;
  default_branch: string;
  tag_list: string[];
  topics: string[];
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  readme_url: string;
  forks_count: number;
  avatar_url: string | null;
  star_count: number;
  last_activity_at: string;
  namespace: GitlabNamespace;
};

export type GitlabMergeRequest = {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: string;
  created_at: string;
  updated_at: string;
  merged_by: GitlabUser | null;
  merge_user: GitlabUser | null;
  merged_at: string | null;
  closed_by: GitlabUser | null;
  closed_at: string | null;
  target_branch: string;
  source_branch: string;
  user_notes_count: number;
  upvotes: number;
  downvotes: number;
  author: GitlabUser;
  assignees: GitlabUser[];
  assignee: GitlabUser | null;
  reviewers: GitlabUser[];
  source_project_id: number;
  target_project_id: number;
  labels: string[];
  draft: boolean;
  imported: boolean;
  imported_from: string;
  work_in_progress: boolean;
  milestone: unknown | null;
  merge_when_pipeline_succeeds: boolean;
  merge_status: string;
  detailed_merge_status: string;
  merge_after: string | null;
  sha: string;
  merge_commit_sha: string | null;
  squash_commit_sha: string | null;
  discussion_locked: boolean | null;
  should_remove_source_branch: boolean | null;
  force_remove_source_branch: boolean;
  prepared_at: string;
  reference: string;
  references: GitlabReference;
  web_url: string;
  time_stats: GitlabTimeStats;
  squash: boolean;
  squash_on_merge: boolean;
  task_completion_status: GitlabTaskCompletionStatus;
  has_conflicts: boolean;
  blocking_discussions_resolved: boolean;
  approvals_before_merge: number | null;
};
