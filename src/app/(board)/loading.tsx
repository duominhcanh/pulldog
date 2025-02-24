import { PawPrint } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen">
      <div className="m-auto flex animate-pulse items-center space-x-2">
        <PawPrint className="scale-x-[-1]" />
        <span className="hidden font-bold lg:inline-block">pulldog</span>
      </div>
    </div>
  );
}
