"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { updateSettings } from "./actions";
import { GhAccount } from "./gh-account";
import { GhAccountDialog } from "./gh-account-dialog";
import { SettingsProps, settingsSchema } from "./schema";

export function GhAccountSettings({
  defaultValues = { ghAccounts: [] },
}: {
  defaultValues?: SettingsProps;
}) {
  const form = useForm<SettingsProps>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SettingsProps) => {
      return updateSettings(data);
    },
  });

  async function onSubmit(data: SettingsProps) {
    const result = await mutateAsync(data);

    if (result.success) {
      toast.success("Changes saved");
    } else {
      toast.error(result.error?.message ?? "Failed to save changes");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="ghAccounts"
          render={({ field }) => (
            <div>
              {field.value.map((account, index) => (
                <div key={index}>
                  <div className="flex flex-row items-center gap-2">
                    <GhAccountDialog
                      dialogTitle="Edit account"
                      dialogDescription="Edit the details of this account"
                      defaultToken={account.token}
                      onSubmitToken={(token) =>
                        field.onChange([
                          ...field.value,
                          { id: nanoid(), token },
                        ])
                      }
                      onRemoveToken={() => {
                        const newTokens = field.value.filter(
                          (_, i) => i !== index,
                        );
                        field.onChange(newTokens);
                      }}
                      dialogTrigger={
                        <Button
                          type="button"
                          variant="ghost"
                          className="-mx-3 my-1 flex min-w-80 justify-start !px-3 !py-8"
                        >
                          <div className="flex flex-row items-center gap-2">
                            <GhAccount token={account.token} />
                          </div>
                        </Button>
                      }
                      submitButtonText="Save Changes"
                      showRemoveButton
                    />
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <GhAccountDialog
                  dialogTitle="Add Account"
                  dialogDescription="Add a new GitHub account to your profile"
                  onSubmitToken={(token) =>
                    field.onChange([...field.value, { id: nanoid(), token }])
                  }
                  dialogTrigger={
                    <Button type="button" variant="ghost" className="-mx-3">
                      <Plus className="h-4 w-4 stroke-green-500" />
                      Add Account
                    </Button>
                  }
                  submitButtonText="Add Token"
                />
              </div>
            </div>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
