import {
  PageColumn,
  PageContent,
  PageHeader,
  PageRoot,
  PageTitle,
} from "@/lib/ui/page";
import { ActionIcon, Skeleton } from "@mantine/core";
import { PawPrint, Settings } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  return (
    <PageRoot>
      <PageHeader fullWidth className="grid-cols-[auto_1fr_auto] gap-2">
        <PageColumn element={PawPrint} strokeWidth={3} size={18} />
        <PageTitle>pulldog</PageTitle>
        <PageColumn
          element={ActionIcon}
          component={Link}
          href="/settings"
          variant="subtle"
          size="xl"
          color="gray"
          radius="xl"
        >
          <Settings strokeWidth={3} size={18} />
        </PageColumn>
      </PageHeader>
      <PageContent className="mx-auto grid w-full max-w-screen-xl grid-cols-[auto_1fr] gap-3 pr-2.75 pl-1">
        <nav className="w-70">
          <ul>
            <div className="flex flex-row items-center gap-2">
              <Skeleton height={22} width={50} radius="xl" />
              <Skeleton height={16} width={60} radius="md" />
            </div>
            <div className="mt-2 flex flex-row items-center gap-2">
              <Skeleton height={22} width={50} radius="xl" />
              <Skeleton height={16} width={70} radius="md" />
            </div>
          </ul>

          <div className="mt-6 flex flex-col gap-2">
            <Skeleton height={14} width={120} radius="xl" />
            <Skeleton height={12} width={70} radius="md" />
            <Skeleton height={12} width={150} radius="md" />
            <Skeleton height={12} width={140} radius="md" />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Skeleton height={14} width={100} radius="xl" />
            <Skeleton height={12} width={70} radius="md" />
            <Skeleton height={12} width={140} radius="md" />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Skeleton height={14} width={110} radius="xl" />
            <Skeleton height={12} width={70} radius="md" />
            <Skeleton height={12} width={150} radius="md" />
          </div>
        </nav>
        <main>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <Skeleton height={32} width={32} radius="xl" />
              <Skeleton height={16} width={200} radius="md" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={400} radius="md" />
              </div>
              <Skeleton height={10} width={110} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={300} radius="md" />
              </div>
              <Skeleton height={10} width={170} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={250} radius="md" />
              </div>
              <Skeleton height={10} width={110} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={500} radius="md" />
              </div>
              <Skeleton height={10} width={90} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={200} radius="md" />
              </div>
              <Skeleton height={10} width={100} radius="xl" className="ml-10" />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <Skeleton height={32} width={32} radius="xl" />
              <Skeleton height={16} width={200} radius="md" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={400} radius="md" />
              </div>
              <Skeleton height={10} width={110} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={300} radius="md" />
              </div>
              <Skeleton height={10} width={170} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={250} radius="md" />
              </div>
              <Skeleton height={10} width={110} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={500} radius="md" />
              </div>
              <Skeleton height={10} width={90} radius="xl" className="ml-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={200} radius="md" />
              </div>
              <Skeleton height={10} width={100} radius="xl" className="ml-10" />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <Skeleton height={32} width={32} radius="xl" />
              <Skeleton height={16} width={200} radius="md" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-2 flex flex-row items-center gap-4">
                <Skeleton height={20} width={20} radius="md" className="ml-1" />
                <Skeleton height={16} width={400} radius="md" />
              </div>
              <Skeleton height={10} width={110} radius="xl" className="ml-10" />
            </div>
          </div>
        </main>
      </PageContent>
    </PageRoot>
  );
}
