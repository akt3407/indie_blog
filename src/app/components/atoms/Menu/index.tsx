"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { menuItems } from "@/data/menuItem";
import { MenuItem } from "@/types/menu";

export default function Menu() {
  const renderMenuItem = (item: MenuItem) => (
    <li key={item.id}>
      <Link
        href={item.href}
        data-cursor=""
        className="block text-[var(--color-primary)] text-base tracking-[0.05rem] leading-[0.5] "
      >
        {item.label}
      </Link>
    </li>
  );

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // 描画制御用
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Overlay アニメーション
  useEffect(() => {
    if (!overlayRef.current) return;

    if (isMenuOpen) {
      setShowOverlay(true); // 描画開始
      // 開くとき
      gsap.fromTo(
        overlayRef.current,
        { clipPath: "circle(0% at 100% 100%)" }, //右下から開始
        {
          clipPath: "circle(150% at 0% 0%)", // 左上まで広がる
          duration: 1.2,
          ease: "power2.out",
        }
      );
    } else {
      // 閉じる時
      gsap.to(overlayRef.current, {
        clipPath: "circle(0% at 100% 100%)",
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => setShowOverlay(false), // 完全に閉じたら非表示
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {isHome ? (
        <nav className="col-start-6 col-span-7 ml-[0.97vw] flex items-end gap-[12vw]">
          <ul className="flex justify-center items-end gap-[12.9vw]">
            {menuItems.slice(0, 3).map(renderMenuItem)}
          </ul>
          <div className="list-none">
            {menuItems[3] && renderMenuItem(menuItems[3])}
          </div>
        </nav>
      ) : (
        <>
          {!isMenuOpen && (
            <div className="col-start-12 ml-[0.97vw]">
              <button
                data-cursor=""
                className="block text-[var(--color-primary)] text-base tracking-[0.05rem] leading-[0.5]"
                onClick={toggleMenu}
              >
                MENU
              </button>
            </div>
          )}
          {isMenuOpen && (
            <>
              <div
                data-cursor="Close"
                ref={overlayRef}
                className="fixed inset-0 bg-[var(--blur-color)] backdrop-blur-[3px] z-40"
                onClick={() => setIsMenuOpen(false)} // 外側クリックで閉じる
              />
              <nav
                className="col-start-6 col-span-7 ml-[0.97vw] flex items-end gap-[12vw] relative z-50"
                onClick={(e) => e.stopPropagation()} // 内側クリックで閉じないr
              >
                <ul className="flex justify-center items-end gap-[12.9vw]">
                  {menuItems.slice(0, 3).map(renderMenuItem)}
                </ul>
                <div className="list-none">
                  {menuItems[3] && renderMenuItem(menuItems[3])}
                </div>
              </nav>
            </>
          )}
        </>
      )}
    </>
  );
}
