import { GitUser } from "@/lib/git-provider";
import { Avatar, Tooltip } from "@mantine/core";

export const Assignee = ({ assignee }: { assignee: GitUser }) => {
  if (!assignee.login) return null;

  return (
    <Tooltip label={assignee.login}>
      <Avatar src={assignee.avatarUrl} radius="xl" size="md" variant="light" />
    </Tooltip>
  );
};
