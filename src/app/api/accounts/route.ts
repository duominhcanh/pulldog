import { publicEnv } from "@/env";
import { accountFormSchema } from "@/features/account/schema";
import { encrypt } from "@/lib/crypto";
import { nanoid } from "nanoid";

export async function GET(request: Request) {}

export async function POST(request: Request) {
  const apiKey = request.headers.get("X-ACCESS-KEY");
  if (!apiKey || apiKey !== publicEnv.accessKey) {
    return Response.json({ error: "Invalid API key" }, { status: 401 });
  }

  const rawBody = await request.json();
  const { success, data, error } =
    await accountFormSchema.safeParseAsync(rawBody);

  if (!success) {
    return Response.json({ error }, { status: 400 });
  }

  const newAccount = {
    id: nanoid(),
    token: encrypt(data.token),
    provider: data.provider,
  };

  return Response.json({ ...newAccount }, { status: 200 });
}
