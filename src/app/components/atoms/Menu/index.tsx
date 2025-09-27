"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { menuItems } from "@/data/menuItem";
import { MenuItem } from "@/types/menu";

export default function Menu() {
  const renderMenuItem = (item: MenuItem) => (
    <li key={item.id}>
      <Link
        href={item.href}
        className="block text-[var(--color-primary)] text-base tracking-[0.05rem] leading-[0.5] "
      >
        {item.label}
      </Link>
    </li>
  );

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 外側をクリックした時にメニューが閉じる
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

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
                className="fixed inset-0 bg-white/10 backdrop-blur-[3px] z-40"
                onClick={handleOverlayClick}
              />
              <nav className="col-start-6 col-span-7 ml-[0.97vw] flex items-end gap-[12vw] relative z-50">
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
