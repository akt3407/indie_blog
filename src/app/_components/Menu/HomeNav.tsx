import { MenuItem } from "@/types/menu";
import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";

type Props = {
  menuItems: MenuItem[];
  renderMenuItem: (item: MenuItem) => React.ReactNode;
  isAnimating: boolean;
  overlayRef: RefObject<HTMLDivElement | null>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function HomeNav({
  menuItems,
  renderMenuItem,
  isAnimating,
  overlayRef,
  isMenuOpen,
  toggleMenu,
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
      gsap.to(Array.from(anchors), {
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
      <nav className="col-start-6 col-span-7 z-50 max-lg:col-start-12 max-lg:col-span-1 max-lg:ml-[-3vw] max-sm:ml-[-4vw] max-ssm:ml-[-8vw]">
        <ul className="max-lg:hidden flex justify-between items-end max-lg:flex-col max-lg:justify-start max-lg:items-start">
          {menuItems.map(renderMenuItem)}
        </ul>

        {!isMenuOpen && !isAnimating && (
          <div className="lg:hidden">
            <button
              className="text-primary text-base tracking-[0.05rem] leading-[0.5] block max-ssm:ml-[-1vw]"
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
            <nav ref={navRef} className="col-start-7 col-span-4 relative z-50">
              <div className="flex items-end gap-[4.5vw] max-lg:flex-col max-lg:mb-8 max-ssm:gap-[7vw] ">
                <ul className="flex justify-center items-end gap-[4.5vw] max-lg:flex-col max-ssm:gap-[7vw]">
                  {menuItems.slice(0, 3).map(renderMenuItem)}
                </ul>
                <ul className="flex gap-[4.5vw] items-end">
                  {menuItems[3] && renderMenuItem(menuItems[3])}
                </ul>
              </div>
            </nav>
            <button
              data-cursor=""
              className="relative col-start-12 block text-primary text-base tracking-[0.05rem] leading-[0.5] z-50 max-ssm:ml-[-2vw]"
              onClick={toggleMenu}
            >
              CLOSE
            </button>
          </>
        )}
      </nav>
    </>
  );
}
