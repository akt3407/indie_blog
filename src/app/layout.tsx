import type { Metadata } from "next";
import {
  workSans,
  shipporiMincho,
  bodoniModa,
  dnpShueiGothicGinstd,
} from "./lib/fonts";
import ThemeProvider from "@/theme/theme-provider";

import "./globals.css";
import Menu from "./components/Menu";
import HomeTitle from "./components/HomeTitle";
import ThemeToggle from "@/theme/theme-toggle";
import Script from "next/script";

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
      <body className="font-primary relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 m-auto bg-bg border-10 border-[var(--color-primary)] border-solid w-full h-lvh grid grid-cols-12 gap-x-[3.5vw] px-[3.5vw] py-[5.13vh] items-start">
            <HomeTitle />
            <ThemeToggle />
            {children}
            <div className="absolute flex justify-between items-end w-[91.8vw] bottom-[5.13vh] left-[3.5vw]">
              <div>
                <p className="text-[var(--color-primary)] text-xs tracking-[0.05rem] leading-none">
                  ( version_1.0.0 )
                </p>
              </div>
              <Menu />
            </div>
          </div>
        </ThemeProvider>
        <Script id="adobe-fonts" strategy="beforeInteractive">
          {`
            (function(d) {
              var config = {
                kitId: 'nns4ucs',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
}
