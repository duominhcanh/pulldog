"use client";

import { ActionIcon, Title } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import clsx from "clsx";
import { Settings } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

function Header({ className }: { className?: string }) {
  const [scroll] = useWindowScroll();

  const isOnTop = useMemo(() => scroll.y === 0, [scroll]);

  return (
    <header
      className={clsx(
        "h-15 backdrop-blur-sm",
        !isOnTop && "border-b border-white/5 shadow-md",
        className,
      )}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-3 py-2">
        <Title order={4}>pulldog</Title>
        <ActionIcon
          component={Link}
          href="/settings"
          variant="subtle"
          size="xl"
        >
          <Settings strokeWidth={3} size={18} />
        </ActionIcon>
      </div>
    </header>
  );
}

function Sidebar({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={clsx("sticky top-15 block self-start pt-4", className)}>
      {children}
    </div>
  );
}

function Main({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <main className={clsx("pt-4", className)}>{children}</main>;
}

export default function TestPage() {
  return (
    <div>
      <Header className="sticky top-0 z-10" />

      <div className="mx-auto grid max-w-screen-xl grid-cols-[auto_1fr] gap-6 px-3">
        <Sidebar className="w-[200px]">
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="mb-4 rounded border p-2">
                <p>Item {index + 1}</p>
              </div>
            ))}
        </Sidebar>

        <Main>
          <p>This is a test page to verify the setup.</p>
        </Main>
      </div>
    </div>
  );
}
