"use server";

import { CookieKey } from "@/lib/cookie";
import { decrypt, encrypt } from "@/lib/crypto";
import { cookies } from "next/headers";
import { ZodError } from "zod";
import { SettingsProps, settingsSchema } from "./schema";

export async function getSettings(): Promise<SettingsProps> {
  const cookieStore = await cookies();
  const settings = cookieStore.get(CookieKey.Settings);
  const parsedSettings = settingsSchema.safeParse(
    JSON.parse(settings?.value ?? "{}"),
  );

  return parsedSettings.success
    ? {
        ...parsedSettings.data,
        ghAccounts: parsedSettings.data.ghAccounts.map((account) => ({
          ...account,
          token: decrypt(account.token),
        })),
      }
    : {
        ghAccounts: [],
      };
}

export async function updateSettings(
  request: SettingsProps,
): Promise<{ success: boolean; error?: ZodError }> {
  const parsedRequest = settingsSchema.safeParse(request);

  if (!parsedRequest.success) {
    return { success: false, error: parsedRequest.error };
  }

  const cookieStore = await cookies();
  const settings = cookieStore.get(CookieKey.Settings);
  const parsedSettings = settingsSchema.safeParse(settings);

  const currentSettings = parsedSettings.success
    ? {
        ...parsedSettings.data,
        ghAccounts: parsedSettings.data.ghAccounts.map((account) => ({
          ...account,
        })),
      }
    : { ghAccounts: [] };

  const updatedSettings = {
    ...currentSettings,
    ...request,
    ghAccounts: [
      ...currentSettings.ghAccounts,
      ...request.ghAccounts.map((account) => ({
        ...account,
        token: encrypt(account.token),
      })),
    ],
  };

  cookieStore.set(CookieKey.Settings, JSON.stringify(updatedSettings), {
    secure: true,
    maxAge: 100 * 365 * 24 * 60 * 60, // 100 years in seconds
  });

  return { success: true };
}
