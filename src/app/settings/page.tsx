import { AccountList } from "@/features/account/account-list";
import { getAccounts } from "@/features/account/actions";
import { AddAccountModalTrigger } from "@/features/account/add-account-modal";
import { ThemePicker } from "@/lib/theme/theme-picker";
import { ActionIcon, Title } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const accounts = await getAccounts();

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 mx-auto flex max-w-screen-lg flex-row items-center gap-3 p-3">
        <ActionIcon
          component={Link}
          href="/"
          variant="subtle"
          size="xl"
          color="gray"
          radius="xl"
        >
          <ArrowLeft strokeWidth={2.5} />
        </ActionIcon>
        <Title order={2}>Settings</Title>
      </nav>
      <div className="mx-auto max-w-screen-lg space-y-8 p-3 pl-17">
        <div className="flex flex-col gap-2">
          <Title order={3}>Theme</Title>
          <ThemePicker />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between">
            <Title order={3}>Accounts</Title>
            <AddAccountModalTrigger />
          </div>
          <AccountList accounts={accounts} />
        </div>
      </div>
    </div>
  );
}
