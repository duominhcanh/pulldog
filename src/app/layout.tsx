import ReactQueryProvider from "@/lib/react-query/react-query-provider";
import { defaultColorScheme, fontMono, fontSans, theme } from "@/theme";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import clsx from "clsx";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pulldog",
  description: "A GitHub pull request dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>
      <body
        className={clsx(
          fontSans.variable,
          fontMono.variable,
          "font-sans antialiased",
        )}
      >
        <ReactQueryProvider>
          <MantineProvider
            defaultColorScheme={defaultColorScheme}
            theme={theme}
          >
            {children}
          </MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
