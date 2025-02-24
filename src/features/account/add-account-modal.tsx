"use client";

import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useMutation } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { AccountForm, AccountFormFields } from "./account-form";
import { addAcount } from "./actions";
import { AccountMutationProps } from "./schema";

export const AddAccountModalTrigger = () => {
  const { mutate } = useMutation({
    mutationFn: (values: AccountMutationProps) => {
      return addAcount(values);
    },
    onSuccess: () => {
      modals.close("add-account-modal");
    },
  });

  return (
    <Button
      variant="light"
      color="gray"
      radius="xl"
      size="md"
      rightSection={<Plus size={16} strokeWidth={3.5} />}
      onClick={() =>
        modals.open({
          modalId: "add-account-modal",
          title: "Add account",
          children: (
            <AccountForm onSubmit={mutate}>
              <AccountFormFields />
              <div className="flex flex-row-reverse">
                <Button type="submit">Add account</Button>
              </div>
            </AccountForm>
          ),
        })
      }
    >
      Add account
    </Button>
  );
};
