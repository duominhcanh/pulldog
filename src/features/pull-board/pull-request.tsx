import { GitPullRequest } from "@/lib/git-provider";
import { AvatarGroup } from "@mantine/core";
import clsx from "clsx";
import { GitPullRequestArrow, GitPullRequestDraft } from "lucide-react";
import Link from "next/link";
import { Assignee } from "./assignee";

const PullRequestStatusIcon = ({
  pullRequest,
}: {
  pullRequest: GitPullRequest;
}) => {
  if (pullRequest.draft)
    return (
      <GitPullRequestDraft
        className={clsx("mt-1.5 ml-0.5 h-5 w-5 stroke-gray-600")}
      />
    );

  if (pullRequest.state === "open")
    return (
      <GitPullRequestArrow
        className={clsx("mt-1.5 ml-0.5 h-5 w-5 stroke-green-600")}
      />
    );
};

export const PullRequest = ({
  pullRequest,
}: {
  pullRequest: GitPullRequest;
}) => {
  return (
    <div className="mt-2 flex flex-row place-content-between">
      <div className="flex flex-row gap-2">
        <PullRequestStatusIcon pullRequest={pullRequest} />
        <div className="flex flex-col gap-1">
          <Link
            href={pullRequest.webUrl || ""}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-lg font-medium">{pullRequest.name}</span>
          </Link>
          <span className="text-sm text-gray-500">
            #{pullRequest.number}{" "}
            {!!pullRequest.author && `opened by ${pullRequest.author?.login}`}
          </span>
        </div>
      </div>
      <AvatarGroup>
        {pullRequest.assignees?.map((assignee) => (
          <Assignee key={assignee.login} assignee={assignee} />
        ))}
      </AvatarGroup>
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
