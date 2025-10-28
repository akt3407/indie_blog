"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-lg:col-start-10 max-lg:col-span-4 max-lg:ml-[-1vw] max-lg:w-fit col-start-12 col-span-1">
      <button
        type="button"
        className="block font-primary text-xxs text-primary tracking-[0.05rem] leading-none"
        title="Toggle theme"
        aria-label="Toggle theme"
        data-cursor=""
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
