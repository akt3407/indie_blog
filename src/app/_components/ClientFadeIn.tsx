"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [pathname]); // ページが変わるたびに実行

  return <div ref={ref}>{children}</div>;
}
