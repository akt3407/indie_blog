"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-fit col-start-12 col-span-1">
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
