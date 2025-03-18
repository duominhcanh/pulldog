"use client";

import { AccountPreview } from "@/features/account/account-preview";
import { addAccount } from "@/features/account/actions";
import {
  accountFormSchema,
  AccountFormValues,
} from "@/features/account/schema";
import { BackIcon } from "@/lib/ui/navigation";
import {
  PageColumn,
  PageContent,
  PageHeader,
  PageRoot,
  PageRow,
  PageTitle,
} from "@/lib/ui/page";
import { Button, Card, Select, Textarea, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { KeyRound, Router } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewAccountPage = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: AccountFormValues) => addAccount(values),
    onSuccess: () => {
      reset();
      setPreviewAccount({ provider: "github", token: "" });
      router.back();
    },
  });

  const { key, getInputProps, onSubmit, watch, values, reset } =
    useForm<AccountFormValues>({
      mode: "uncontrolled",
      initialValues: {
        provider: "github",
        token: "",
      },
      validate: zodResolver(accountFormSchema),
    });

  const [previewAccount, setPreviewAccount] = useState<AccountFormValues>({
    token: values.token,
    provider: values.provider as "github" | "gitlab",
  });

  watch("token", ({ value }) => {
    setPreviewAccount({ ...previewAccount, token: value });
  });

  watch("provider", ({ value }) => {
    setPreviewAccount({
      ...previewAccount,
      provider: value as "github" | "gitlab",
    });
  });

  return (
    <PageRoot element="form" onSubmit={onSubmit((values) => mutate(values))}>
      <PageHeader>
        <PageColumn element={BackIcon} href="/settings/accounts" />
        <PageTitle>Add account</PageTitle>
        <Button
          loading={isPending}
          className="w-fit"
          type="submit"
          variant="gradient"
          gradient={{ from: "cyan", to: "teal", deg: 90 }}
        >
          Save
        </Button>
      </PageHeader>
      <PageContent>
        <PageRow>
          <Card className="col-start-2">
            <AccountPreview account={previewAccount} />
          </Card>
        </PageRow>
        <PageRow>
          <Router className="mt-2 ml-1.5" size={20} />
          <Select
            data={[
              { value: "github", label: "Github" },
              { value: "gitlab", label: "Gitlab" },
            ]}
            checkIconPosition="right"
            placeholder="Provider"
            key={key("provider")}
            {...getInputProps("provider")}
          />
        </PageRow>
        <PageRow>
          <KeyRound className="mt-2 ml-1.5" size={20} />
          <Textarea
            placeholder="Token"
            autosize
            minRows={2}
            key={key("token")}
            {...getInputProps("token")}
          />
        </PageRow>
      </PageContent>
    </PageRoot>
  );
};

export { NewAccountPage };
