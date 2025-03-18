"use server";

import { decrypt, encrypt } from "@/lib/crypto";
import { getProvider, GitUser } from "@/lib/git-provider";
import { cookies } from "next/headers";
import { AccountProps, accountsCookieSchema } from "./schema";

const addAccount = async (account: AccountProps): Promise<void> => {
  const cookieStore = await cookies();
  const accounts = await getAccounts();

  const securedAccount = {
    token: encrypt(account.token),
    provider: account.provider,
  };

  const newAccounts = [...accounts, securedAccount];

  cookieStore.set("accounts", JSON.stringify(newAccounts), {
    secure: true,
    maxAge: Number.MAX_SAFE_INTEGER,
  });
};

const removeAccount = async (account: AccountProps): Promise<void> => {
  const cookieStore = await cookies();
  const accounts = await getAccounts();

  const newAccounts = accounts.filter((a) => a.token !== account.token);

  cookieStore.set("accounts", JSON.stringify(newAccounts), {
    secure: true,
    maxAge: Number.MAX_SAFE_INTEGER,
  });
};

const getAccounts = async (): Promise<AccountProps[]> => {
  const cookieStore = await cookies();

  if (!cookieStore.has("accounts")) {
    return [];
  }

  const cookie = cookieStore.get("accounts");
  const accounts = accountsCookieSchema.parse(JSON.parse(cookie!.value));

  return accounts;
};

const getUser = async ({
  account,
}: {
  account: AccountProps;
}): Promise<GitUser | null> => {
  const token = account.secured ? decrypt(account.token) : account.token;

  const user = await getProvider(account.provider).getCurrentUser(token);

  return user;
};

export { addAccount, getAccounts, getUser, removeAccount };
