"use client";

import { GitPullRequest } from "@/lib/git-provider";
import { ScrollArea, Switch } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import groupBy from "lodash.groupby";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { getPullBoardData } from "./actions";
import { NoPullRequests, PullRequest } from "./pull-request";
import { Repository } from "./repository";
import { useBoardFilter } from "./use-board-filter";

export const PullBoard = () => {
  const { data } = useQuery({
    queryKey: ["getPullBoardData"],
    queryFn: () => getPullBoardData(),
  });

  const repos = useMemo(() => data?.repositories || [], [data]);

  const [filters, setFilters] = useBoardFilter({
    showEmpty: false,
    focusedRepo: null,
  });

  const repoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredRepos = useMemo(
    () =>
      filters.showEmpty
        ? repos
        : repos.filter((repo) => repo.pulls && repo.pulls.length > 0),
    [repos, filters.showEmpty],
  );

  const hasRepos = useMemo(() => filteredRepos.length > 0, [filteredRepos]);

  const repoIndexes = useMemo(() => {
    const grouped = groupBy(
      filteredRepos.map((repo) => ({
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
  }, [filteredRepos]);

  const isFocusedRepo = useCallback(
    (repoId: number) => {
      return filters.focusedRepo === +repoId;
    },
    [filters.focusedRepo],
  );

  const setFocusedRepo = useCallback(
    (repoId: number) => {
      setFilters({ ...filters, focusedRepo: +repoId });
    },
    [filters, setFilters],
  );

  const setShowEmpty = useCallback(
    (showEmpty: boolean) => {
      setFilters({ ...filters, showEmpty });
    },
    [filters, setFilters],
  );

  useEffect(() => {
    if (filters.focusedRepo) {
      const repoElement = repoRefs.current[filters.focusedRepo];
      if (repoElement) {
        repoElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [filters.focusedRepo]);

  if (!hasRepos) {
    return <EmptyBoard />;
  }

  return (
    <main className="top-14 mx-auto flex w-full max-w-screen-xl flex-row gap-8 md:px-8">
      <aside className="bg-background fixed bottom-0 z-30 h-[calc(100vh-3.5rem)] w-full max-w-xs shrink-0 pt-4">
        <ScrollArea className="h-[calc(100vh-3.5rem)]">
          <div className="mb-4 flex flex-col gap-2">
            <Switch
              defaultChecked={filters.showEmpty}
              checked={filters.showEmpty}
              onChange={(e) => setShowEmpty(e.target.checked)}
              label="Empty"
            />
          </div>

          {repoIndexes.map((owner) => (
            <div key={owner.owner} className="pb-4">
              <h4 className="mb-1 rounded-md py-1 text-sm font-semibold">
                {owner.owner}
              </h4>

              <div className="grid grid-flow-row auto-rows-max text-sm">
                {owner.repos.map((repo) => (
                  <button
                    key={repo.id}
                    onClick={() => setFocusedRepo(+repo.id!)}
                    className={clsx(
                      "text-muted-foreground flex w-full items-center rounded-md border border-transparent py-1 hover:underline",
                      isFocusedRepo(+repo.id!) &&
                        "text-foreground font-semibold",
                    )}
                  >
                    {repo.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </aside>

      <div className="w-full max-w-xs"></div>

      <div className="flex-grow gap-2">
        {filteredRepos.map((repo) => (
          <div
            key={repo.id}
            className={clsx(
              "mb-8 rounded-md",
              isFocusedRepo(+repo.id!) &&
                "outline-border outline outline-2 outline-offset-8",
            )}
          >
            <div
              ref={(el) => {
                repoRefs.current[+repo.id!] = el;
              }}
              className="relative top-[-4.2rem]"
              id={"" + repo.id}
            />
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
