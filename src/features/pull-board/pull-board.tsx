"use client";

import { GitPullRequest } from "@/lib/git-provider";
import {
  PageColumn,
  PageContent,
  PageHeader,
  PageRoot,
  PageTitle,
} from "@/lib/ui/page";
import { ActionIcon } from "@mantine/core";
import clsx from "clsx";
import groupBy from "lodash.groupby";
import { PawPrint, Settings } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FiltersForm } from "./filters-form";
import { NoPullRequests, PullRequest } from "./pull-request";
import { Repository } from "./repository";
import { BoardData, BoardFilters } from "./schema";

export const PullBoard = ({
  repositories,
  filters,
}: BoardData & { filters: BoardFilters }) => {
  const hasData = repositories.length > 0;
  const [focusedRepoId, setFocusedRepoId] = useState<string | number | null>(null);

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

  const handleRepoNavClick = (repoId: string | number) => {
    setFocusedRepoId(prev => prev === repoId ? null : repoId);
    const element = document.getElementById("repo-" + repoId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  if (!hasData) {
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
        <PageContent>
          <NoPullRequests className="ml-2" />
        </PageContent>
      </PageRoot>
    );
  }

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
                      onClick={() =>
                        handleRepoNavClick(
                          repo.id as unknown as string | number,
                        )
                      }
                      key={repo.id}
                      className={clsx(
                        "text-muted-foreground flex w-full items-center rounded-md border border-transparent py-1 hover:underline cursor-pointer",
                      )}
                    >
                      {repo.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </nav>
        <main>
          {repositories.map((repo) => (
            <div key={repo.id} className={clsx("mb-12 rounded-lg p-md ring-2", focusedRepoId === repo.id ? "ring-dark-4": "ring-transparent")}>
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
      </PageContent>
    </PageRoot>
  );
};
