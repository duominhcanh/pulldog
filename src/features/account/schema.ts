import { GitUser } from "@/lib/git-provider";
import { z } from "zod";

export const accountFormSchema = z.object({
  token: z.string(),
  provider: z.enum(["github", "gitlab"]),
});

export const accountsCookieSchema = z.array(accountFormSchema);

export type AccountMutationProps = z.infer<typeof accountFormSchema>;

export type AccountProps = AccountMutationProps & {
  secured?: boolean;
} & GitUser;
