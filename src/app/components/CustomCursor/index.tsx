"use client";

import gsap from "gsap";
import { useEffect } from "react";

interface CustomCursorElement extends HTMLElement {
  _cursorListenerAttached: boolean;
}

const CustomCursor = () => {
  useEffect(() => {
    const cursorFollower = document.querySelector(
      ".follower"
    ) as HTMLDivElement | null;

    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent): void => {
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    gsap.set(cursorFollower, {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener("mousemove", moveCursor);

    // イベントリスナーを追加する関数
    const attachListeners = () => {
      const hoverElements = document.querySelectorAll("[data-cursor]");

      hoverElements.forEach((element) => {
        if (!(element as CustomCursorElement)._cursorListenerAttached) {
          const handleMouseEnter = () => {
            gsap.to(cursorFollower, {
              scale: 2,
              duration: 0.5,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(cursorFollower, {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          };

          element.addEventListener("mouseenter", handleMouseEnter);
          element.addEventListener("mouseleave", handleMouseLeave);

          (element as CustomCursorElement)._cursorListenerAttached = true;
        }
      });
    };

    // 初回実行
    attachListeners();

    // DOMの変更を監視
    const observer = new MutationObserver(() => {
      attachListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
      observer.disconnect();
    };
  }, []);

  return (
    <div className="max-lg:hidden z-10">
      <div className="follower w-[30px] h-[30px] rounded-full bg-white fixed z-50 mix-blend-difference pointer-events-none opacity-20 flex justify-center items-center"></div>
    </div>
  );
};

export default CustomCursor;
