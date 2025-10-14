"use client";
import { RefObject } from "react";

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
  return (
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
          <nav className="col-start-8 col-span-4 ml-[-0.6vw] flex items-end gap-[4.5vw] relative z-50">
            <ul className="flex justify-center items-end gap-[4.5vw]">
              {menuItems.slice(0, 3).map(renderMenuItem)}
            </ul>
            <ul>{menuItems[3] && renderMenuItem(menuItems[3])}</ul>
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
  );
}
