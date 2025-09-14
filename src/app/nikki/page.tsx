"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import ArticleList from "../components/ArticleList";

export default function Page() {
  const { theme } = useTheme();

  return (
    <>
      <div className="absolute top-[120px] left-[8vw] flex justify-center items-start gap-[2.7vw]">
        <div className="aspect-video w-[41.7vw]">
          <Image
            src="/sample_img.jpg"
            alt="ブログのサムネ"
            width={579}
            height={327}
            loading="lazy"
          />
        </div>
        <div className="max-h-[75vh] overflow-y-auto">
          <ArticleList />
        </div>
      </div>
      <div className="absolute bottom-[80px] left-[42px] w-[46.3vw]">
        <Image
          src={
            theme === "dark" ? "/nikki_logo-dark.svg" : "/nikki_logo-light.svg"
          }
          alt="日記"
          width={667}
          height={154}
          loading="lazy"
        />
      </div>
    </>
  );
}
