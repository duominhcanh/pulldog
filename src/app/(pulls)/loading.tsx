import { ActionIcon, Skeleton, Title } from "@mantine/core";
import clsx from "clsx";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  return (
    <>
      <Header className="sticky top-0 z-10" />
      <div className="mx-auto grid max-w-screen-xl grid-cols-[auto_1fr] gap-6 px-3">
        <Sidebar className="max-w-[400px] min-w-[300px] pt-8">
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
        </Sidebar>
        <Main>
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
        </Main>
      </div>
    </>
  );
}

function Header({ className }: { className?: string }) {
  return (
    <header className={clsx("h-14 backdrop-blur-sm", className)}>
      <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-3 py-2">
        <Title order={4}>pulldog</Title>
        <ActionIcon
          disabled
          component={Link}
          href="/settings"
          variant="subtle"
          size="xl"
        >
          <Settings strokeWidth={3} size={18} />
        </ActionIcon>
      </div>
    </header>
  );
}

function Sidebar({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={clsx("sticky top-14 block self-start pt-4", className)}>
      {children}
    </div>
  );
}

function Main({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <main className={clsx("pt-4", className)}>{children}</main>;
}
