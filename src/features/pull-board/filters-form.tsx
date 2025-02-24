"use client";

import { Switch } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { setFilters } from "./actions";
import { BoardFilters } from "./schema";

export const FiltersForm = ({
  initialValues,
}: {
  initialValues: BoardFilters;
}) => {
  const form = useForm({
    mode: "controlled",
    initialValues,
  });

  const { mutate } = useMutation({
    mutationFn: (values: BoardFilters) => setFilters(values),
  });

  return (
    <form
      onChange={form.onSubmit((values) => mutate(values))}
      className="space-y-2"
    >
      <Switch
        label="Empty"
        key={form.key("empty")}
        {...form.getInputProps("empty")}
      />
      <Switch
        label="Starred"
        key={form.key("starred")}
        {...form.getInputProps("starred")}
      />
    </form>
  );
};
