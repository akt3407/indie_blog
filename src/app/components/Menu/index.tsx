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
        className="block text-[var(--color-primary)] text-base tracking-[0.05rem] leading-[0.5]"
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
        <nav className="flex justify-center items-end gap-[173px]">
          <ul className="flex justify-center items-end gap-[186px]">
            {menuItems.slice(0, 3).map(renderMenuItem)}
          </ul>
          <ul>{menuItems[3] && renderMenuItem(menuItems[3])}</ul>
        </nav>
      ) : (
        <div>
          {!isMenuOpen ? (
            <button
              className="block text-[var(--color-primary)] text-base tracking-[0.05rem] leading-[0.5]"
              onClick={toggleMenu}
            >
              MENU
            </button>
          ) : (
            <>
              {/* オーバーレイ */}
              <div
                className="fixed inset-0 bg-white/10 backdrop-blur-[3px] z-40"
                onClick={handleOverlayClick}
              />
              {/* メニューコンテンツ */}
              <div className="relative z-50">
                <nav className="flex justify-center items-end gap-[173px]">
                  <ul className="flex justify-center items-end gap-[186px]">
                    {menuItems.slice(0, 3).map(renderMenuItem)}
                  </ul>
                  <ul>{menuItems[3] && renderMenuItem(menuItems[3])}</ul>
                </nav>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
