import { getSettings } from "@/features/settings/actions";
import { GhAccountSettings } from "@/features/settings/gh-account-settings";
import { ThemeSettings } from "@/features/settings/theme-settings";

export default async function Page() {
  const settings = await getSettings();

  return (
    <main className="top-14 mx-auto w-full max-w-screen-xl md:px-8">
      <h2 className="text-h2">Settings</h2>
      <span className="text-muted-foreground">Manage your settings here.</span>

      <div className="mt-8">
        <h3 className="text-h3">Theme</h3>
        <span className="text-muted-foreground">
          Customize the appearance of the app.
        </span>
        <ThemeSettings className="mt-6" />
      </div>

      <div className="mt-8">
        <h3 className="text-h3">Accounts</h3>
        <span className="text-muted-foreground">
          Manage your GitHub accounts here.
        </span>
        <GhAccountSettings defaultValues={settings} />
      </div>
    </main>
  );
}
