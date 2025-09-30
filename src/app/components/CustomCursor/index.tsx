"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const cursorFollower = document.querySelector(
      ".follower"
    ) as HTMLDivElement | null;
    const cursorTextElement = document.querySelector(
      ".cursor-text"
    ) as HTMLSpanElement | null;

    document.body.style.cursor = "none";

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

    // イベントリスナーを追加する関数
    const attachListeners = () => {
      const hoverElements = document.querySelectorAll("[data-cursor]");

      hoverElements.forEach((element) => {
        if (!(element as any)._cursorListenerAttached) {
          const handleMouseEnter = () => {
            const text = element.getAttribute("data-cursor") || "";
            setCursorText(text);
            gsap.to(cursorFollower, {
              scale: 1.5,
              duration: 0.3,
              ease: "power2.out",
            });
            // テキストを表示
            if (cursorTextElement) {
              gsap.to(cursorTextElement, {
                opacity: 1,
                duration: 0.2,
              });
            }
          };

          const handleMouseLeave = () => {
            setCursorText("");
            gsap.to(cursorFollower, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
            // テキストを非表示
            if (cursorTextElement) {
              gsap.to(cursorTextElement, {
                opacity: 0,
                duration: 0.2,
              });
            }
          };

          element.addEventListener("mouseenter", handleMouseEnter);
          element.addEventListener("mouseleave", handleMouseLeave);

          (element as any)._cursorListenerAttached = true;
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
      <div className="follower w-[50px] h-[50px] rounded-full bg-white fixed z-50 mix-blend-difference pointer-events-none opacity-20 flex justify-center items-center">
        <span className="cursor-text text-white mix-blend-difference text-xxs font-light opacity-20 whitespace-nowrap">
          {cursorText}
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;
