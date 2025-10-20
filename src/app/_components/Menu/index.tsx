"use client";

import { MenuItem } from "@/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HomeNav from "./HomeNav";
import { menuItems } from "@/data/menuItem";
import OverlayMenu from "./OverlayMenu";

export default function Menu() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const renderMenuItem = (item: MenuItem) => (
    <li key={item.id}>
      <Link
        href={item.href}
        data-cursor=""
        className="block text-primary text-base tracking-[0.05rem] leading-[0.5] will-change-transform *:will-change-transform"
      >
        {item.label}
      </Link>
    </li>
  );

  const toggleMenu = () => {
    if (isMenuOpen) {
      // 閉じるアニメーション
      setIsAnimating(true);
      // 先にメニュー開閉フラグを閉じへ。DOMはisAnimatingで維持
      setIsMenuOpen(false);
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          clipPath: "circle(0% at 100% 100%)",
          duration: 1,
          ease: "sine.in",
          onComplete: () => {
            setIsAnimating(false);
          },
        });
      } else {
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

  // Overlayアニメーション(開く時のみ)
  useEffect(() => {
    if (!overlayRef.current || !isMenuOpen) return;

    gsap.fromTo(
      overlayRef.current,
      { clipPath: "circle(0% at 100% 100%)" },
      {
        clipPath: "circle(150% at 0% 0%)",
        duration: 1.5,
        ease: "sine.out",
      }
    );
  }, [isMenuOpen]);

  return (
    <>
      {isHome ? (
        <HomeNav menuItems={menuItems} renderMenuItem={renderMenuItem} />
      ) : (
        <OverlayMenu
          menuItems={menuItems}
          renderMenuItem={renderMenuItem}
          isMenuOpen={isMenuOpen}
          isAnimating={isAnimating}
          toggleMenu={toggleMenu}
          overlayRef={overlayRef}
        />
      )}
    </>
  );
}
