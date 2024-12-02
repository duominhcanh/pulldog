import { Toaster } from "../ui/sonner";
import { ReactQueryProvider } from "./react-query-provider";
import { ThemeProvider } from "./theme-provider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReactQueryProvider>{children}</ReactQueryProvider>
      <Toaster />
    </ThemeProvider>
  );
};
