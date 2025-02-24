"use client";

import { GitPullRequest } from "@/lib/git-provider";
import clsx from "clsx";
import groupBy from "lodash.groupby";
import { useMemo } from "react";
import { FiltersForm } from "./filters-form";
import { NoPullRequests, PullRequest } from "./pull-request";
import { Repository } from "./repository";
import { BoardData, BoardFilters } from "./schema";

export const PullBoard = ({
  repositories,
  filters,
}: BoardData & { filters: BoardFilters }) => {
  const hasRepos = useMemo(() => repositories.length > 0, [repositories]);

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

  if (!hasRepos) {
    return <EmptyBoard />;
  }

  return (
    <main className="mx-auto flex w-full max-w-screen-xl flex-grow flex-row gap-8 md:px-8">
      <aside className="bg-background sticky top-0 bottom-0 z-30 w-full max-w-[18rem] shrink-0 pt-4">
        <FiltersForm initialValues={filters} />

        <ul className="mt-8">
          {repoIndexes.map((owner) => (
            <div key={owner.owner} className="pb-4">
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
      </aside>

      <div className="border-border flex-grow gap-2 border-l border-dashed pt-4 pl-4">
        {repositories.map((repo) => (
          <div key={repo.id} className={clsx("mb-8 rounded-md")}>
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
      </div>
    </main>
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
