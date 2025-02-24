import { Button } from "@mantine/core";
import clsx from "clsx";
import { AccountPreview } from "./account-preview";
import { AccountProps } from "./schema";
import { removeAccount } from "./actions";

export const AccountList = ({
  className,
  accounts,
}: {
  className?: string;
  accounts: AccountProps[];
}) => {
  return (
    <ul className={clsx(className)}>
      {accounts.map((account, i) => (
        <li
          key={"account-" + i}
          className={clsx(
            "border-border border-b border-dashed pt-4 pb-2",
            className,
          )}
        >
          <div className="flex flex-row gap-4">
            <AccountPreview
              account={{
                ...account,
                secured: true,
              }}
            />
          </div>
          <div className="mt-2 -ml-1">
            <form action={removeAccount.bind(null, account)}>
              <Button
                variant="subtle"
                color="red"
                p={3}
                className="max-h-6"
                type="submit"
              >
                Delete
              </Button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  );
};
