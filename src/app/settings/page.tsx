import { BackIcon } from "@/lib/ui/navigation";
import {
  PageColumn,
  PageContent,
  PageHeader,
  PageRoot,
  PageRow,
  PageTitle,
} from "@/lib/ui/page";
import { Text } from "@mantine/core";
import { Component, UserRound } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <PageRoot>
      <PageHeader>
        <PageColumn element={BackIcon} href="/" />
        <PageTitle>Settings</PageTitle>
      </PageHeader>
      <PageContent>
        <PageRow element={Link} href="/settings/general">
          <div className="overflow-hidden pb-4">
            <Component className="mt-2 ml-2" size={20} />
          </div>
          <div className="item-content grid grid-cols-1 gap-3 pb-4">
            <Text size="sm" fw={600} className="mt-2">
              General
            </Text>
          </div>
        </PageRow>
        <PageRow
          element={Link}
          href="/settings/accounts"
          className="last:[&_.item-content]:border-transparent"
        >
          <div className="overflow-hidden pb-4">
            <UserRound className="mt-2 ml-2" size={20} />
          </div>
          <div className="item-content grid grid-cols-1 gap-3 pb-4">
            <Text size="sm" fw={600} className="mt-2">
              Accounts
            </Text>
          </div>
        </PageRow>
      </PageContent>
    </PageRoot>
  );
}
