"use client";

import { removeAccount } from "@/features/account/actions";
import { AccountProps } from "@/features/account/schema";
import { BackIcon } from "@/lib/ui/navigation";
import {
  PageColumn,
  PageContent,
  PageHeader,
  PageRoot,
  PageRow,
  PageTitle,
} from "@/lib/ui/page";
import { ActionIcon, Avatar, Text } from "@mantine/core";
import { Plus, X } from "lucide-react";
import Link from "next/link";

export const AccountListPage = ({
  accounts = [],
}: {
  accounts?: AccountProps[];
}) => {
  return (
    <PageRoot>
      <PageHeader>
        <PageColumn element={BackIcon} href="/settings" />
        <PageTitle>Accounts</PageTitle>
        <PageColumn
          element={ActionIcon}
          component={Link}
          href="/settings/accounts/new"
          className="-mr-0.5"
          variant="subtle"
          size="xl"
          color="gray"
          radius="xl"
        >
          <Plus strokeWidth={3} size={18} />
        </PageColumn>
      </PageHeader>
      <PageContent element={"ul"}>
        {accounts.map((account, i) => (
          <ListItem key={"account" + i} account={account} />
        ))}
      </PageContent>
    </PageRoot>
  );
};

const ListItem = ({ account }: { account: AccountProps }) => {
  return (
    <PageRow
      rows={3}
      element="li"
      className="last:[&_.item-content]:border-transparent"
    >
      <div className="border-b border-transparent">
        <Avatar
          variant="light"
          radius="xl"
          color="gray"
          src={account.avatarUrl}
          className="-mt-4.5"
        >
          ?
        </Avatar>
      </div>
      <div className="item-content grid grid-cols-[1fr_auto] gap-3 border-b pb-4">
        <div className="flex flex-col">
          <Text size="sm" fw={600}>
            {account.name}
          </Text>
          <Text
            size="sm"
            component={Link}
            href={account.webUrl || "#"}
            target="_blank"
          >
            {account.login}
          </Text>
        </div>
        <form
          action={removeAccount.bind(null, {
            provider: account.provider,
            token: account.token,
            secured: true,
          })}
        >
          <ActionIcon
            component="button"
            type="submit"
            variant="subtle"
            size="xl"
            color="gray"
            radius="xl"
            className="-mr-0.5"
          >
            <X strokeWidth={3} size={18} />
          </ActionIcon>
        </form>
      </div>
    </PageRow>
  );
};
