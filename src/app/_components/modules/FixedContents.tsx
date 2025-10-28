"use client";

import { usePathname } from "next/navigation";

import ThemeToggle from "@/theme/theme-toggle";
import HomeTitle from "../atoms/HomeTitle";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  const pathname = usePathname();

  if (pathname === "/")
    return (
      <>
        <div className="fixed bg-bg border-10 border-primary border-solid w-full h-svh px-[2.77vw] py-[6.4vh]">
          <div className="absolute top-[45%] left-7">
            <svg
              width="24"
              height="72"
              viewBox="0 0 24 72"
              fill="var(--color-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0V72"
                stroke="var(--color-primary)"
                strokeWidth="0.7"
              />
              <path
                d="M24 36L-8.49366e-07 36"
                stroke="var(--color-primary)"
                strokeWidth="0.7"
              />
            </svg>
          </div>
          <header className="grid grid-cols-[repeat(11,1fr)_auto] gap-x-[3.5vw] z-[100] fixed w-[93vw]">
            <HomeTitle />
            <ThemeToggle />
          </header>
          {children}
          <div className="absolute top-[45%] right-7">
            <svg
              width="24"
              height="72"
              viewBox="0 0 24 72"
              fill="var(--color-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0V72"
                stroke="var(--color-primary)"
                strokeWidth="0.7"
              />
              <path
                d="M24 36L-8.49366e-07 36"
                stroke="var(--color-primary)"
                strokeWidth="0.7"
              />
            </svg>
          </div>
        </div>
      </>
    );

  if (pathname !== "/") {
    return (
      <div className="fixed bg-bg w-full h-svh px-[3.47vw] py-[7.69vh]">
        <div className="absolute top-[45.1%] left-9.5">
          <svg
            width="24"
            height="72"
            viewBox="0 0 24 72"
            fill="var(--color-primary)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0V72"
              stroke="var(--color-primary)"
              strokeWidth="0.7"
            />
            <path
              d="M24 36L-8.49366e-07 36"
              stroke="var(--color-primary)"
              strokeWidth="0.7"
            />
          </svg>
        </div>
        <header className="grid grid-cols-[repeat(11,1fr)_auto] gap-x-[3.5vw] z-[100] fixed w-[93vw]">
          <HomeTitle />
          <ThemeToggle />
        </header>
        {children}
        <div className="absolute top-[45.1%] right-9.5">
          <svg
            width="24"
            height="72"
            viewBox="0 0 24 72"
            fill="var(--color-primary)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0V72"
              stroke="var(--color-primary)"
              strokeWidth="0.7"
            />
            <path
              d="M24 36L-8.49366e-07 36"
              stroke="var(--color-primary)"
              strokeWidth="0.7"
            />
          </svg>
        </div>
      </div>
    );
  }
};

export default Header;
