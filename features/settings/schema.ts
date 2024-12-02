import { z } from "zod";

export const settingsSchema = z.object({
  ghAccounts: z.array(
    z.object({
      id: z.string(),
      token: z.string().min(2, {
        message: "GitHub token is required",
      }),
    }),
  ),
});

export type SettingsProps = z.infer<typeof settingsSchema>;
