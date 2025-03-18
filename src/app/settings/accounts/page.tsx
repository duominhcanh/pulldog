import { getAccounts, getUser } from "@/features/account/actions";
import { AccountListPage } from "./account-list-page";

export default async function Page() {
  const accounts = await getAccounts();
  const accountDetails = (
    await Promise.all(
      accounts.map(async (account) => {
        const user = await getUser({ account: { ...account, secured: true } });
        return { ...account, ...user };
      }),
    )
  ).filter((account) => account.id !== null);

  return <AccountListPage accounts={accountDetails} />;
}
