import { AppHeader } from "@/components/layouts/app-header";
import "./globals.css";

import { AppProvider } from "@/components/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulldog",
  description: "Pulldog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <AppProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            <AppHeader />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
