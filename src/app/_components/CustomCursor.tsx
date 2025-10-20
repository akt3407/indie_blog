"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface CustomCursorElement extends HTMLElement {
  _cursorListenerAttached: boolean;
}

const CustomCursor = () => {
  const pathname = usePathname(); // 👈 ページパスを監視

  useEffect(() => {
    const cursorFollower = document.querySelector(
      ".follower"
    ) as HTMLDivElement | null;
    const cursorInner = document.querySelector(
      ".follower-inner"
    ) as HTMLDivElement | null;

    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent): void => {
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    gsap.set(cursorFollower, {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener("mousemove", moveCursor);

    const attachListeners = () => {
      const hoverElements = document.querySelectorAll("[data-cursor]");

      hoverElements.forEach((element) => {
        if (!(element as CustomCursorElement)._cursorListenerAttached) {
          const handleMouseEnter = () => {
            gsap.to(cursorFollower, {
              borderColor: "rgba(255,255,255,0)",
              duration: 0.1,
              ease: "power2.out",
            });
            gsap.to(cursorInner, {
              scale: 10,
              opacity: 0.9,
              duration: 0.6,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(cursorFollower, {
              borderColor: "rgba(255,255,255,1)",
              duration: 0.1,
              ease: "power2.out",
            });
            gsap.to(cursorInner, {
              scale: 1,
              opacity: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          };

          element.addEventListener("mouseenter", handleMouseEnter);
          element.addEventListener("mouseleave", handleMouseLeave);

          (element as CustomCursorElement)._cursorListenerAttached = true;
        }
      });
    };

    attachListeners();

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

  // ✅ ページ遷移のたびにリセット
  useEffect(() => {
    const cursorFollower = document.querySelector(
      ".follower"
    ) as HTMLDivElement | null;
    const cursorInner = document.querySelector(
      ".follower-inner"
    ) as HTMLDivElement | null;

    if (cursorFollower && cursorInner) {
      gsap.to(cursorFollower, {
        borderColor: "rgba(255,255,255,1)",
        duration: 0.3,
        ease: "power1.out",
      });
      gsap.to(cursorInner, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  }, [pathname]); // 👈 ページが変わるたびに実行

  return (
    <div className="max-lg:hidden z-10">
      <div className="follower w-[40px] h-[40px] rounded-full border-[1.5px] border-mh-white fixed z-50 mix-blend-difference pointer-events-none opacity-20 flex justify-center items-center">
        <div className="follower-inner bg-mh-white w-[6px] h-[6px] rounded-full"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
