"use client";

import { usePathname } from "next/navigation";

export default function VersionText() {
  const pathname = usePathname();

  if (pathname === "/")
    return (
      <>
        <p className="col-start-1 col-span-2 text-[var(--color-primary)] text-xs tracking-[0.05rem] leading-none">
          ( version_1.0.0 )
        </p>
      </>
    );
}
