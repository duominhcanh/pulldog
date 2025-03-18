import { ActionIcon } from "@mantine/core";
import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const BackIcon = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  return (
    <ActionIcon
      component={Link}
      href={href}
      className={clsx("action-icon", className)}
      variant="subtle"
      size="xl"
      color="gray"
      radius="xl"
    >
      <ArrowLeft strokeWidth={3} size={18} />
    </ActionIcon>
  );
};
