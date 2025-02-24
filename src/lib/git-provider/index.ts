import { github } from "./github";
import { gitlab } from "./gitlab";
import { GitProvider } from "./schema";

export function getProvider(provider: "github" | "gitlab"): GitProvider {
  switch (provider) {
    case "github":
      return github;
    case "gitlab":
      return gitlab;
    default:
      throw new Error(`Invalid provider: ${provider}`);
  }
}

export * from "./schema";
