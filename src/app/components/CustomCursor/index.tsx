"use client";

import gsap from "gsap";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorFollower = document.querySelector(
      ".follower"
    ) as HTMLDivElement | null;

    const moveCursor = (e: MouseEvent): void => {
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    gsap.set(cursorFollower, {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="max-lg:hidden z-10">
      <div className="follower w-[50px] h-[50px] rounded-full bg-white fixed z-50 mix-blend-difference pointer-events-none"></div>
    </div>
  );
};

export default CustomCursor;
