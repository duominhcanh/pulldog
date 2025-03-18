"use client";

import { Avatar, Text } from "@mantine/core";
import clsx from "clsx";
import Link from "next/link";
import { AccountProps } from "./schema";
import { UserQuery } from "./user-query";

export const AccountPreview = ({
  account,
  className,
}: {
  account?: AccountProps;
  className?: string;
}) => {
  return (
    <UserQuery account={account}>
      {({ user }) => {
        if (!user) {
          return (
            <div className={clsx("grid grid-cols-[auto_1fr] gap-2", className)}>
              <Avatar variant="light" radius="xl" color="gray">
                ?
              </Avatar>
              <div className="my-auto">
                <Text size="sm" fw={700}>
                  Unknown user
                </Text>
                <Text size="sm">user@email.com</Text>
              </div>
            </div>
          );
        }

        return (
          <div className={clsx("grid grid-cols-[auto_1fr] gap-2", className)}>
            <Avatar
              variant="light"
              radius="xl"
              color="gray"
              src={user.avatarUrl}
              className="my-auto"
            >
              ?
            </Avatar>
            <div className="my-auto">
              <Text size="sm" fw={700}>
                {user.name}
              </Text>
              <Text size="sm" component={Link} href={user.webUrl || "#"}>
                {user.login}
              </Text>
            </div>
          </div>
        );
      }}
    </UserQuery>
  );
};
