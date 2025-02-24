import ReactQueryProvider from "@/lib/react-query/react-query-provider";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulldog",
  description: "A pull request dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <ReactQueryProvider>
          <MantineProvider defaultColorScheme="dark">
            <ModalsProvider>{children}</ModalsProvider>
          </MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
