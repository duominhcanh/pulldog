import { PullRequestProps } from "@/lib/octokit/schema";
import clsx from "clsx";
import { GitPullRequestArrow, GitPullRequestDraft } from "lucide-react";
import Link from "next/link";
import { Assignee } from "./assignee";

const PullRequestStatusIcon = ({
  pullRequest,
}: {
  pullRequest: PullRequestProps;
}) => {
  if (pullRequest.draft)
    return (
      <GitPullRequestDraft
        className={clsx("ml-0.5 mt-1.5 h-5 w-5 stroke-gray-600")}
      />
    );

  if (pullRequest.state === "open")
    return (
      <GitPullRequestArrow
        className={clsx("ml-0.5 mt-1.5 h-5 w-5 stroke-green-600")}
      />
    );
};

export const PullRequest = ({
  pullRequest,
}: {
  pullRequest: PullRequestProps;
}) => {
  return (
    <div className="mt-2 flex flex-row place-content-between">
      <div className="flex flex-row gap-2">
        <PullRequestStatusIcon pullRequest={pullRequest} />
        <div className="flex flex-col gap-1">
          <Link href={pullRequest.html_url} target="_blank" rel="noreferrer">
            <span className="text-lg font-medium">{pullRequest.title}</span>
          </Link>
          <span className="text-sm text-gray-500">
            #{pullRequest.number} opened by {pullRequest.user?.login}
          </span>
        </div>
      </div>
      <div>
        {pullRequest.assignee && <Assignee assignee={pullRequest.assignee} />}
      </div>
    </div>
  );
};

export const NoPullRequests = ({ className }: { className?: string }) => {
  return (
    <p className={clsx("text-sm text-gray-500", className)}>
      No open pull requests
    </p>
  );
};
