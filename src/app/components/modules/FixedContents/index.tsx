"use client";

import { usePathname } from "next/navigation";

import ThemeToggle from "@/theme/theme-toggle";
import HomeTitle from "../../atoms/HomeTitle";

type Props = {
  children: React.ReactNode;
};

const FixedContents = ({ children }: Props) => {
  const pathname = usePathname();

  if (pathname === "/")
    return (
      <>
        <div className="fixed bg-bg border-10 border-[var(--color-primary)] border-solid w-full h-svh px-[2.77vw] py-[6.4vh]">
          <div className="absolute top-[50%] left-7">
            <svg
              width="24"
              height="72"
              viewBox="0 0 24 72"
              fill="var(--color-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0V72" stroke="var(--color-primary)" />
              <path d="M24 36L-8.49366e-07 36" stroke="var(--color-primary)" />
            </svg>
          </div>
          <header className="grid grid-cols-[repeat(11,1fr)_auto] gap-x-[3.5vw] z-[100] fixed w-[93vw]">
            <HomeTitle />
            <ThemeToggle />
          </header>
          {children}
          <div className="absolute top-[50%] right-7">
            <svg
              width="24"
              height="72"
              viewBox="0 0 24 72"
              fill="var(--color-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0V72" stroke="var(--color-primary)" />
              <path d="M24 36L-8.49366e-07 36" stroke="var(--color-primary)" />
            </svg>
          </div>
        </div>
      </>
    );

  if (pathname !== "/") {
    return (
      <div className="fixed bg-bg w-full h-svh px-[2.77vw] py-[6.4vh]">
        <div className="absolute top-[50%] left-7">
          <svg
            width="24"
            height="72"
            viewBox="0 0 24 72"
            fill="var(--color-primary)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0V72" stroke="var(--color-primary)" />
            <path d="M24 36L-8.49366e-07 36" stroke="var(--color-primary)" />
          </svg>
        </div>
        <header className="grid grid-cols-[repeat(11,1fr)_auto] gap-x-[3.5vw] z-[100] fixed w-[93vw]">
          <HomeTitle />
          <ThemeToggle />
        </header>
        {children}
        <div className="absolute top-[50%] right-7">
          <svg
            width="24"
            height="72"
            viewBox="0 0 24 72"
            fill="var(--color-primary)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0V72" stroke="var(--color-primary)" />
            <path d="M24 36L-8.49366e-07 36" stroke="var(--color-primary)" />
          </svg>
        </div>
      </div>
    );
  }
};

export default FixedContents;
