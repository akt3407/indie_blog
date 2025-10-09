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
        className="block text-primary text-base tracking-[0.05rem] leading-[0.5] "
      >
        {item.label}
      </Link>
    </li>
  );

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // 閉じるアニメーション
      setIsAnimating(true);
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          clipPath: "circle(0% at 100% 100%)",
          duration: 1.0,
          ease: "power2.in",
          onComplete: () => {
            setIsMenuOpen(false);
            setIsAnimating(false);
          },
        });
      } else {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }
    } else {
      // 開くアニメーション
      setIsMenuOpen(true);
    }
  };

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAnimating(false);
  }, [pathname]);

  // Overlay アニメーション（開く時のみ）
  useEffect(() => {
    if (!overlayRef.current || !isMenuOpen) return;

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
          {!isMenuOpen && !isAnimating && (
            <div className="col-start-12 ml-[0.97vw]">
              <button
                data-cursor=""
                className="block text-primary text-base tracking-[0.05rem] leading-[0.5]"
                onClick={toggleMenu}
              >
                MENU
              </button>
            </div>
          )}
          {(isMenuOpen || isAnimating) && (
            <>
              <div
                ref={overlayRef}
                className="fixed inset-0 bg-blur backdrop-blur-[3px] z-40"
              />
              <nav className="col-start-8 col-span-4 ml-[1rem] flex items-end gap-[3.625rem] relative z-50">
                <ul className="flex justify-center items-end gap-[4.5rem]">
                  {menuItems.slice(0, 3).map(renderMenuItem)}
                </ul>
                <div className="list-none">
                  {menuItems[3] && renderMenuItem(menuItems[3])}
                </div>
                <button
                  data-cursor=""
                  className="block text-primary text-base tracking-[0.05rem] leading-[0.5]"
                  onClick={toggleMenu}
                >
                  CLOSE
                </button>
              </nav>
            </>
          )}
        </>
      )}
    </>
  );
}
