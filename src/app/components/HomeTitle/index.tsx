"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HomeTitle() {
  const pathname = usePathname();
  const { theme } = useTheme();

  // ページ判定
  const isHome = pathname === "/";

  return (
    <>
      <div className="col-start-1 col-end-9">
        {isHome ? (
          <div className="w-[54.7vw]">
            <Image
              src={
                theme === "dark"
                  ? "/title_logo-dark.svg"
                  : "/title_logo-light.svg"
              }
              width={788}
              height={137}
              loading="eager"
              alt="Logo"
            />
          </div>
        ) : (
          <div className="w-[6.74vw]">
            <Image
              src={
                theme === "dark"
                  ? "/header_logo-dark.svg"
                  : "/header_logo-light.svg"
              }
              width={97}
              height={28}
              loading="lazy"
              alt="Logo"
            />
          </div>
        )}
      </div>
    </>
  );
}
