import { GitPullRequest } from "@/lib/git-provider";
import { ActionIcon, ScrollArea } from "@mantine/core";
import clsx from "clsx";
import groupBy from "lodash.groupby";
import { PawPrint, Settings2 } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { FiltersForm } from "./filters-form";
import { NoPullRequests, PullRequest } from "./pull-request";
import { Repository } from "./repository";
import { BoardData, BoardFilters } from "./schema";

export const PullBoard = ({
  repositories,
  filters,
}: BoardData & { filters: BoardFilters }) => {
  const hasData = repositories.length > 0;

  const repoIndexes = useMemo(() => {
    const grouped = groupBy(
      repositories.map((repo) => ({
        id: repo.id,
        name: repo.name,
        owner: {
          avatarUrl: repo.owner?.avatarUrl,
          login: repo.owner?.login,
        },
      })),
      "owner.login",
    );

    return Object.keys(grouped).map((owner) => ({
      owner,
      repos: grouped[owner].sort((a, b) => a.name!.localeCompare(b.name!)),
    }));
  }, [repositories]);

  if (!hasData) {
    return <EmptyBoard />;
  }

  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-auto">
      <nav className="border-border bg-body supports-[backdrop-filter]:bg-body/60 sticky top-0 z-50 border-b border-dashed backdrop-blur">
        <div className="mx-auto flex h-14 max-w-screen-xl flex-row justify-between p-3">
          <Link href={"/"} className="mr-4 flex items-center space-x-2 lg:mr-6">
            <PawPrint className="scale-x-[-1]" />
            <span className="hidden font-bold lg:inline-block">pulldog</span>
          </Link>
          <Link href={"/settings"}>
            <ActionIcon variant="subtle" color="gray" size="lg" radius="xl">
              <Settings2 size={16} />
            </ActionIcon>
          </Link>
        </div>
      </nav>
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-[auto_1fr]">
        <ScrollArea
          component="aside"
          type="scroll"
          className="border-border sticky top-14 h-[calc(100vh-3.55rem)] w-80 overflow-auto border-r border-dashed p-3"
        >
          <FiltersForm initialValues={filters} />

          <ul className="mt-8">
            {repoIndexes.map((owner) => (
              <div key={owner.owner} className="pb-6">
                <h4 className="mb-1 rounded-md py-1 text-sm font-semibold">
                  {owner.owner}
                </h4>

                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {owner.repos.map((repo) => (
                    <button
                      key={repo.id}
                      className={clsx(
                        "text-muted-foreground flex w-full items-center rounded-md border border-transparent py-1 hover:underline",
                      )}
                    >
                      {repo.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </ScrollArea>
        <main className="p-3">
          {repositories.map((repo) => (
            <div key={repo.id} className={clsx("mb-12 rounded-md")}>
              <div className="relative top-[-4.2rem]" id={"repo-" + repo.id} />
              <Repository repo={repo} />
              <div className="mt-3 flex flex-col gap-3">
                {repo.pulls && repo.pulls.length > 0 ? (
                  repo.pulls.map((pull: GitPullRequest) => (
                    <PullRequest key={pull.id} pullRequest={pull} />
                  ))
                ) : (
                  <NoPullRequests className="ml-8" />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

const EmptyBoard = () => {
  return (
    <main className="mx-auto flex w-full max-w-screen-xl flex-row gap-10 md:px-8">
      <div className="flex flex-row gap-2">
        <NoPullRequests className="mt-8" />
      </div>
    </main>
  );
};
