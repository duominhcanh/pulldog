"use client";

import { Card, Select, TextInput } from "@mantine/core";
import {
  createFormContext,
  UseFormInput,
  UseFormReturnType,
  zodResolver,
} from "@mantine/form";
import clsx from "clsx";
import { useState } from "react";
import { AccountPreview } from "./account-preview";
import { accountFormSchema, AccountMutationProps } from "./schema";

const [FormProvider, useFormContext, useForm] =
  createFormContext<AccountMutationProps>();

export const AccountForm = ({
  children,
  mode = "uncontrolled",
  validate = zodResolver(accountFormSchema),
  initialValues = {
    token: "",
    provider: "github",
  },
  onSubmit = () => {},
  className,
  ...props
}: UseFormInput<AccountMutationProps> & {
  children?: React.ReactNode;
  onSubmit?: (values: AccountMutationProps) => void;
  className?: string;
}) => {
  const form = useForm({
    mode,
    initialValues,
    validate,
    ...props,
  });

  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit(onSubmit)}
        className={clsx("space-y-4", className)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const AccountFormFields = ({
  form: propsForm,
}: {
  form?: UseFormReturnType<AccountMutationProps>;
}) => {
  const ctxForm = useFormContext();
  const form = propsForm || ctxForm;

  const [previewAccount, setPreviewAccount] = useState({
    token: form.values.token,
    provider: form.values.provider,
    secure: false,
  });

  form.watch("token", ({ value }) => {
    setPreviewAccount({ ...previewAccount, token: value });
  });

  form.watch("provider", ({ value }) => {
    setPreviewAccount({ ...previewAccount, provider: value });
  });

  return (
    <>
      <Card className="flex flex-row gap-4">
        <AccountPreview account={previewAccount} />
      </Card>

      <Select
        label="Provider"
        placeholder="Pick value"
        data={[
          { value: "github", label: "Github" },
          { value: "gitlab", label: "Gitlab" },
        ]}
        key={form.key("provider")}
        {...form.getInputProps("provider")}
      />

      <TextInput
        withAsterisk
        label="Token"
        placeholder="Personal access token"
        key={form.key("token")}
        {...form.getInputProps("token")}
      />
    </>
  );
};
