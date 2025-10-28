"use client";
import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";

import { MenuItem } from "@/types/menu";

type Props = {
  menuItems: MenuItem[];
  renderMenuItem: (item: MenuItem) => React.ReactNode;
  isMenuOpen: boolean;
  isAnimating: boolean;
  toggleMenu: () => void;
  overlayRef: RefObject<HTMLDivElement | null>;
};

export default function OverlayMenu({
  menuItems,
  renderMenuItem,
  isMenuOpen,
  isAnimating,
  toggleMenu,
  overlayRef,
}: Props) {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const anchors = navRef.current.querySelectorAll<HTMLAnchorElement>("a");
    if (!anchors.length) return;

    // 既存トゥイーンを明示的に停止
    gsap.killTweensOf(anchors);

    // 開く時
    if (isMenuOpen) {
      gsap.fromTo(
        anchors,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2.2,
          stagger: 0.2,
          delay: 0.15,
          ease: "expo.out",
          clearProps: "transform,opacity",
        }
      );
    } else if (isAnimating && !isMenuOpen) {
      // 閉じる時（親がisAnimating=trueの間はDOMが残る）
      gsap.to(Array.from(anchors).reverse(), {
        yPercent: 120,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "expo.in",
      });
    }
  }, [isMenuOpen, isAnimating]);

  return (
    <>
      {!isMenuOpen && !isAnimating && (
        <div className="col-start-12 ml-[0.97vw] static max-md:fixed">
          <button
            data-cursor=""
            className="button block text-primary text-base tracking-[0.05rem] leading-[0.5]"
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
          <nav
            ref={navRef}
            className="col-start-7 col-span-4 ml-[7.5vw]  relative z-50"
          >
            <div className="flex items-end gap-[4.5vw]">
              <ul className="flex justify-center items-end gap-[4.5vw]">
                {menuItems.slice(0, 3).map(renderMenuItem)}
              </ul>
              <ul className="flex gap-[4.5vw] items-end">
                {menuItems[3] && renderMenuItem(menuItems[3])}
              </ul>
            </div>
          </nav>
          <button
            data-cursor=""
            className="relative col-start-12 ml-[0.97vw] block text-primary text-base tracking-[0.05rem] leading-[0.5] z-50"
            onClick={toggleMenu}
          >
            CLOSE
          </button>
        </>
      )}
    </>
  );
}
