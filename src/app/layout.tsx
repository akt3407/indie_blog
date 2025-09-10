import type { Metadata } from "next";
import { workSans, shipporiMincho, bodoniModa } from "./lib/fonts";
import ThemeProvider from "@/theme/theme-provider";

import "./globals.css";
import Menu from "./components/Menu";
import HomeTitle from "./components/HomeTitle";
import ThemeToggle from "@/theme/theme-toggle";

export const metadata: Metadata = {
  title: "BLooooG",
  description: "BLooooG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${workSans.variable} ${shipporiMincho.variable} ${bodoniModa.variable}`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nns4ucs.css" />
      </head>
      <body className="font-primary relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 m-auto bg-bg border-10 border-[var(--color-primary)] border-solid w-full h-lvh grid grid-cols-12 grid-rows-12 gap-x-[50px] gap-y-[20px] px-[50px] py-[40px] items-start">
            <HomeTitle />
            <ThemeToggle />
            {children}
            <p className="fixed left-[60px] bottom-[50px] text-[var(--color-primary)] text-xs tracking-[0.05rem] leading-none">
              ( version_1.0.0 )
            </p>
            <Menu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
