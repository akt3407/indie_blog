"use client";

import { usePathname } from "next/navigation";
import VersionText from "../atoms/FixedText";
import Menu from "../Menu";

export default function FooterMenu() {
  const pathname = usePathname();

  // トップページの場合は表示しない
  if (pathname === "/") {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-x-[3.5vw] fixed justify-between items-end w-[93vw] bottom-[7.8vh] left-[3.47vw] z-50">
        <VersionText />
        <Menu />
      </div>
    </>
  );
}
