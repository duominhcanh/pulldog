import { getBoardData, getFilters } from "@/features/pull-board/actions";
import { PullBoard } from "@/features/pull-board/pull-board";
import { ActionIcon } from "@mantine/core";
import { PawPrint, Settings2 } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const boardData = await getBoardData();
  const filters = await getFilters();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-body supports-[backdrop-filter]:bg-body/60 border-border sticky top-0 z-50 flex w-full border-b border-dashed backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-screen-xl items-center md:px-8">
          <div className="mr-4 hidden md:flex">
            <Link
              href={"/"}
              className="mr-4 flex items-center space-x-2 lg:mr-6"
            >
              <PawPrint className="scale-x-[-1]" />
              <span className="hidden font-bold lg:inline-block">pulldog</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Link href={"/settings"}>
                <ActionIcon variant="subtle" color="gray" size="lg" radius="xl">
                  <Settings2 size={16} />
                </ActionIcon>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <PullBoard repositories={boardData.repositories} filters={filters} />
    </div>
  );
}
