import type { Metadata } from "next";
import { workSans, shipporiMincho, bodoniModa } from "./lib/fonts";
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
      <body className="font-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed bg-bg border-10 border-[var(--color-primary)] border-solid w-full h-svh px-[2.77vw] py-[6.4vh]">
            <header className="grid grid-cols-[repeat(11,1fr)_auto] gap-x-[3.5vw] z-[100] fixed w-[93vw]">
              <HomeTitle />
              <ThemeToggle />
            </header>
            <div className="grid grid-cols-12 gap-x-[3.5vw] w-[93vw] h-[84.8vh] relative">
              {children}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-[3.5vw] fixed justify-between items-end w-[93vw] bottom-[6.4vh] left-[3.47vw]">
            <p className="col-start-1 col-span-2 text-[var(--color-primary)] text-xs tracking-[0.05rem] leading-none">
              ( version_1.0.0 )
            </p>
            <Menu />
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
