"use client";

import { usePathname } from "next/navigation";

export default function FixedText() {
  const pathname = usePathname();

  if (pathname === "/")
    return (
      <>
        <p className="col-start-1 col-span-2 text-primary text-xs tracking-[0.03rem] leading-none transition-colors duration-150 max-sm:col-span-2 max-sm:ml-[1vw] max-ssm:col-span-4">
          ( No Scrolling )
        </p>
      </>
    );

  if (pathname !== "/")
    return (
      <>
        <p className="col-start-1 col-span-2 text-primary text-xs tracking-[0.05rem] leading-none transition-colors duration-150 max-sm:col-span-2 max-sm:ml-[1vw] max-ssm:col-span-4">
          ( Scrollable )
        </p>
      </>
    );
}
