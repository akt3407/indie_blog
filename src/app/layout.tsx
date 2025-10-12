import type { Metadata } from "next";
import { workSans, shipporiMincho } from "./_libs/fonts";
import ThemeProvider from "@/theme/theme-provider";
import Script from "next/script";

import "./globals.css";
import Menu from "./_components/atoms/Menu";
import FixedContents from "./_components/modules/FixedContents";
import VersionText from "./_components/atoms/FixedText";
import CustomCursor from "./_components/CustomCursor";

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
      className={`${workSans.variable} ${shipporiMincho.variable}`}
      suppressHydrationWarning={true}
    >
      <body className="font-primary text-primary bg-bg theme-changing">
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FixedContents>
            <div className="grid grid-cols-12 gap-x-[3.5vw] w-[93vw]">
              {children}
            </div>
          </FixedContents>
          <div className="grid grid-cols-12 gap-x-[3.5vw] fixed justify-between items-end w-[93vw] bottom-[7.8vh] left-[3.47vw]">
            <VersionText />
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
