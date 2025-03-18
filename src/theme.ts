import { ActionIcon, createTheme } from "@mantine/core";
import { Geist_Mono, Poppins } from "next/font/google";

export const fontSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const defaultColorScheme = "dark";

export const theme = createTheme({
  fontFamily: fontSans.style.fontFamily,
  fontFamilyMonospace: fontMono.style.fontFamily,
  fontSmoothing: true,
  primaryColor: "cyan",
  defaultRadius: "md",
  components: {
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
    Input: {
      classNames: {
        input:
          "border-t-0 border-r-0 border-l-0 border-b-[1.5px] rounded-b-none bg-transparent px-px",
      },
    },
    ActionIcon: {
      defaultProps: {
        radius: "xl",
        variant: "subtle",
        color: "gray",
      },
    },
  },
});
