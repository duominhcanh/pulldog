import { GitPullRequest } from "@/lib/git-provider";
import { AvatarGroup, Text } from "@mantine/core";
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
          <Text
            component={Link}
            href={pullRequest.webUrl || ""}
            target="_blank"
            rel="noreferrer"
            size="lg"
          >
            {pullRequest.name}
          </Text>

          <div className="flex flex-row items-center gap-1">
            <Text
              size="sm"
              variant="gradient"
              gradient={{ from: "cyan", to: "teal", deg: 90 }}
            >
              #{pullRequest.number}
            </Text>
            <Text size="sm" c="gray.6">
              {!!pullRequest.author && `opened by ${pullRequest.author?.login}`}
            </Text>
          </div>
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
