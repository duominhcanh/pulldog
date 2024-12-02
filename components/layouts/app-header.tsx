import { PawPrint, Settings2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 mb-4 flex w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-screen-xl items-center md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href={"/"} className="mr-4 flex items-center space-x-2 lg:mr-6">
            <PawPrint className="scale-x-[-1]" />
            <span className="hidden font-bold lg:inline-block">pulldog</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link href={"/settings"}>
              <Button variant="ghost" size="icon">
                <Settings2 size={16} />
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
