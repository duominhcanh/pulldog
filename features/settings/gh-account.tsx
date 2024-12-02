"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/lib/octokit/actions";
import { useQuery } from "@tanstack/react-query";

export const GhAccount = ({ token }: { token?: string }) => {
  const { data } = useQuery({
    queryKey: [getUser, token],
    queryFn: () => getUser(token ?? ""),
    enabled: !!token,
  });

  const account = {
    login: data?.login,
    avatar_url: data?.avatar_url,
    name: data?.name,
  };

  return (
    <div className="flex flex-row items-center gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src={account.avatar_url} />
        <AvatarFallback>{account.name ?? "?"}</AvatarFallback>
      </Avatar>
      <div className="-mt-1 flex flex-col items-start">
        <span className="font-medium">{account.name ?? "\u200b"}</span>
        <span className="text-sm text-muted-foreground">
          {account.login ?? "\u200b"}
        </span>
      </div>
    </div>
  );
};
