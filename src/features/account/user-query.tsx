"use client";

import { GitUser } from "@/lib/git-provider";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getUser } from "./actions";
import { AccountProps } from "./schema";

export type UserQueryRendererProps = {
  user: GitUser | null;
  isLoading: boolean;
};

export const UserQuery = ({
  account,
  children,
}: {
  account?: AccountProps;
  children: ({ user, isLoading }: UserQueryRendererProps) => React.ReactNode;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["getUser", account],
    queryFn: () => getUser({ account: account! }),
    enabled: !!account?.token,
  });

  const user = useMemo(() => {
    if (!data?.id) {
      return null;
    }

    return data;
  }, [data]);

  return children({ user, isLoading });
};
