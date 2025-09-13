"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function HomeTitle() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted || !theme) return null;

  // ページ判定
  const isHome = pathname === "/";

  const imgPC = isHome
    ? theme === "dark"
      ? "/title_logo-dark.svg"
      : "/title_logo-light.svg"
    : theme === "dark"
    ? "/header_logo-dark.svg"
    : "header_logo-light.svg";

  return (
    <>
      <div className="col-start-1 col-end-9 row-start-1 row-end-4 w-[54.7vw]">
        <picture className="block">
          <source srcSet={imgPC} />
          <img src={imgPC} alt="Title Logo" />
        </picture>
      </div>
    </>
  );
}
