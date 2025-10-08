"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<"light" | "dark" | null>(
    null
  );

  // サーバーサイドレンダリング時に theme が未定義なため、マウント完了後に表示
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // SSR対策

  return (
    <div className="w-fit col-start-12 col-span-1">
      <button
        type="button"
        className="block font-primary text-xxs text-primary tracking-[0.05rem] leading-none transition-colors duration-150"
        title="Toggle theme"
        aria-label="Toggle theme"
        data-cursor=""
        onClick={() => {
          // フェード開始: body に一時クラスを付与
          if (!isChanging) {
            setIsChanging(true);
            document.documentElement.classList.add("theme-changing");
          }
          // テーマを切替
          const next = theme === "dark" ? "light" : "dark";
          setPendingTheme(next); // 楽観的にラベルを即時更新
          setTheme(next);
          // 少し待ってからクラス除去（トランジション継続のため余裕を持たせる）
          window.setTimeout(() => {
            document.documentElement.classList.remove("theme-changing");
            setIsChanging(false);
          }, 900);
        }}
      >
        {(pendingTheme ?? theme) === "dark" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
