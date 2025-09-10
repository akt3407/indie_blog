"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // サーバーサイドレンダリング時に theme が未定義なため、マウント完了後に表示
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // SSR対策

  return (
    <button
      type="button"
      className="font-primary text-xxs text-primary tracking-[0.05rem] leading-none col-start-12 col-end-13 row-start-1 row-end-2"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
