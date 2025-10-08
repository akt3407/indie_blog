"use client";

import { usePathname } from "next/navigation";

export default function VersionText() {
  const pathname = usePathname();

  if (pathname === "/")
    return (
      <>
        <p className="col-start-1 col-span-2 text-[var(--color-primary)] text-xs tracking-[0.05rem] leading-none transition-colors duration-150">
          ( No Scrolling )
        </p>
      </>
    );

  if (pathname !== "/")
    return (
      <>
        <p className="col-start-1 col-span-2 text-[var(--color-primary)] text-xs tracking-[0.05rem] leading-none transition-colors duration-150">
          ( Scrollable )
        </p>
      </>
    );
}
