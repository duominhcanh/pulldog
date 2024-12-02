import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PullRequestProps } from "@/lib/octokit/schema";
import Link from "next/link";

export const Assignee = ({
  assignee,
}: {
  assignee: PullRequestProps["assignee"];
}) => {
  if (!assignee) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={assignee.html_url} target="_blank" rel="noreferrer">
            <Avatar className="h-6 w-6">
              <AvatarImage src={assignee.avatar_url} />
              <AvatarFallback>{assignee.login.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{assignee.login}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
