import { GitUser } from "@/lib/git-provider";
import { z } from "zod";

const accountFormSchema = z.object({
  token: z.string().min(1, { message: "This field is required" }),
  provider: z.enum(["github", "gitlab"], {
    errorMap: () => ({ message: "Invalid provider" }),
  }),
});

const accountsCookieSchema = z.array(accountFormSchema);

type AccountFormValues = z.infer<typeof accountFormSchema>;

type AccountProps = AccountFormValues & {
  secured?: boolean;
} & GitUser;

export {
  type AccountFormValues,
  type AccountProps,
  accountFormSchema,
  accountsCookieSchema,
};
