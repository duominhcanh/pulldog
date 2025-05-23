import { GitRepository } from "@/lib/git-provider";
import { Anchor, Avatar, Breadcrumbs } from "@mantine/core";

export const Repository = ({ repo }: { repo: GitRepository }) => {
  return (
    <div>
      <Breadcrumbs separator="›">
        <Anchor
          href={repo.owner?.webUrl}
          className="flex flex-row items-center gap-2 text-(--text-color)"
        >
          <Avatar
            src={repo.owner?.avatarUrl}
            radius="xl"
            size="sm"
            variant="light"
          >
            {(repo.owner?.login || "rp").slice(0, 2)}
          </Avatar>
          <span>{repo.owner?.login}</span>
        </Anchor>
        <Anchor href={repo.webUrl} className="text-(--text-color)">
          {repo.name}
        </Anchor>
      </Breadcrumbs>
    </div>
  );
};
