import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ReposProps } from "@/lib/octokit/schema";

export const Repository = ({ repo }: { repo: ReposProps }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={repo.owner.html_url}
            className="flex items-center gap-2 font-medium"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src={repo.owner.avatar_url} />
              <AvatarFallback>
                {repo.owner.login.charAt(0) || "?"}
              </AvatarFallback>
            </Avatar>
            <span>{repo.owner.login}</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={repo.html_url} className="font-medium">
            {repo.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
