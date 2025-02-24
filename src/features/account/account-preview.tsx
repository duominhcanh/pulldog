"use client";

import { Avatar, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Github, Gitlab } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { AccountProps } from "./schema";
import { getUser } from "./actions";

function ensureVisible(src: string | undefined) {
  return src ? src : "‎";
}

export const AccountPreview = ({
  account: propsAccount,
}: {
  account: AccountProps;
}) => {
  const { data } = useQuery({
    queryKey: ["loadAccount", propsAccount.provider, propsAccount.token],
    queryFn: () =>
      getUser({
        account: propsAccount,
      }),
    enabled: !!propsAccount.token,
  });

  const account = useMemo(
    () => ({
      ...propsAccount,
      name: ensureVisible(data?.name),
      login: ensureVisible(data?.login),
      avatarUrl: data?.avatarUrl,
      webUrl: data?.webUrl,
    }),
    [data, propsAccount],
  );

  return (
    <>
      <Avatar src={account.avatarUrl} className="mt-1" />
      <div>
        <Text fw={600}>{account.name}</Text>
        <Link
          href={account.webUrl || "#"}
          target="_blank"
          className="flex flex-row items-center gap-2"
        >
          {account.provider === "github" ? (
            <Github size={14} strokeWidth={3} />
          ) : (
            <Gitlab size={14} strokeWidth={3} />
          )}

          <Text component="span">{account.login}</Text>
        </Link>
      </div>
    </>
  );
};
