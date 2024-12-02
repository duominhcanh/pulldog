"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSettings = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ThemeToggle className={cn("justify-self-start", className)} />;
  }

  return (
    <ThemeToggle
      className={cn("justify-self-start", className)}
      key={theme}
      defaultValue={theme}
      onValueChange={setTheme}
    />
  );
};

const ThemeToggle = ({
  className,
  defaultValue = "",
  onValueChange = () => {},
}: {
  className?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}) => {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={className}
    >
      <ToggleGroupItem value="light" aria-label="Toggle light">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle system">
        <Computer className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
