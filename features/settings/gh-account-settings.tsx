"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getUser } from "@/lib/octokit/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { ReactNode, RefAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useDebounce } from "use-debounce";
import { updateSettings } from "./actions";
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
        className="mt-6 w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="ghAccounts"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-2">
                {field.value.map((account, index) => (
                  <div key={index}>
                    <div className="flex flex-row items-center gap-2">
                      <GhAccount
                        token={account.token}
                        actions={
                          <div className="flex flex-row gap-3">
                            <GhAccountInput
                              defaultValue={account.token}
                              onSubmit={(token) =>
                                field.onChange([
                                  ...field.value,
                                  { id: nanoid(), token },
                                ])
                              }
                              dialogTriggerProps={{
                                type: "button",
                                variant: "link",
                                className: "p-0",
                                children: "Edit",
                              }}
                            />
                            <Button
                              variant="link"
                              className="p-0 text-destructive"
                              onClick={() => {
                                const newTokens = field.value.filter(
                                  (_, i) => i !== index,
                                );
                                field.onChange(newTokens);
                              }}
                            >
                              Remove
                            </Button>
                          </div>
                        }
                      />
                    </div>

                    <FormMessage className="mt-1">
                      {form.formState.errors.ghAccounts?.[index]?.message}
                    </FormMessage>
                  </div>
                ))}
                <GhAccountInput
                  onSubmit={(token) =>
                    field.onChange([...field.value, { id: nanoid(), token }])
                  }
                />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Save
        </Button>
      </form>
    </Form>
  );
}

const GhAccountInput = ({
  defaultValue,
  onSubmit = () => {},
  dialogTriggerProps = {
    type: "button",
    variant: "secondary",
    children: "Add Account",
  },
}: {
  defaultValue?: string;
  onSubmit?: (token: string) => void;
  dialogTriggerProps?: ButtonProps & RefAttributes<HTMLButtonElement>;
}) => {
  const [token, setToken] = useState(defaultValue);
  const [debouncedToken] = useDebounce(token, 500);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button {...dialogTriggerProps} onClick={() => setIsOpen(true)}>
          {dialogTriggerProps.children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <GhAccount token={debouncedToken} />

        <div className="grid gap-4">
          <Label htmlFor="name">Token</Label>
          <Textarea
            id="name"
            placeholder="GitHub Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={() => {
              onSubmit(token ?? "");
              setIsOpen(false);
            }}
          >
            Add Token
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const GhAccount = ({
  token,
  actions,
}: {
  token?: string;
  actions?: React.ReactNode;
}) => {
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
    <div className="flex flex-row items-start gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src={account.avatar_url} />
        <AvatarFallback>{account.name ?? "?"}</AvatarFallback>
      </Avatar>
      <div className="-mt-1 flex flex-col items-start">
        <span className="font-medium">{account.name ?? "\u200b"}</span>
        <span className="text-sm text-muted-foreground">
          {account.login ?? "\u200b"}
        </span>
        {actions}
      </div>
    </div>
  );
};
