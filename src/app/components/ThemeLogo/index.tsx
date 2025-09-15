"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ThemeLogo({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
}: Props) {
  const { theme } = useTheme();

  return (
    <div className={className}>
      <Image
        src={theme === "dark" ? darkSrc : lightSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
