"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function HeroPicture() {
  const pathname = usePathname();
  const { theme } = useTheme();

  // themeが決まっていない時は何も表示しない
  if (!theme) return null;

  // ページ判定
  const isHome = pathname === "/";

  // モード判定
  const isDark = theme === "dark";

  const imgPC = isHome
    ? isDark
      ? "/title_dark.svg"
      : "/title_light.svg"
    : isDark
    ? "/header_logo-dark.svg"
    : "/header_logo-light.svg";

  return (
    <>
      <picture>
        <source srcSet={imgPC} />
        <img src={imgPC} alt="Title Logo" />
      </picture>
    </>
  );
}
