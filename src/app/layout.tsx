import type { Metadata } from "next";
import { workSans, shipporiMincho, bodoniModa } from "./lib/fonts";
import ThemeProvider from "@/theme/theme-provider";

import "./globals.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

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
          <div className="fixed inset-0 m-auto bg-[var(--color-bg)] border-10 border-[var(--color-primary)] border-solid w-full h-lvh grid grid-cols-12 gap-x-[50px] px-[50px] py-[60px]">
            <Header />
            {children}
            <p className="fixed left-[60px] bottom-[70px] text-[var(--color-primary)] text-xs tracking-[0.05rem] leading-none">
              ( version_1.0.0 )
            </p>
            <Menu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
