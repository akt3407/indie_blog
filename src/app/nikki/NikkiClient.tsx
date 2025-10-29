"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";

import ArticleList from "../_components/ArticleList";
import { Blog } from "../_libs/microcms";

type Props = {
  data: { contents: Blog[] };
};

export default function NikkiClient({ data }: Props) {
  const [hoveredThumbnail, setHoveredThumbnail] = useState<
    Blog["thumbnail"] | null
  >(null);

  const handleThumbnailHover = (thumbnail: Blog["thumbnail"] | null) => {
    setHoveredThumbnail(thumbnail);
  };

  useEffect(() => {
    if (hoveredThumbnail) {
      gsap.fromTo(
        ".thumbnail",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [hoveredThumbnail]);

  return (
    <>
      <div className="thumbnail col-start-1 col-span-6 ml-[4.58vw] relative top-[8.97vh] aspect-video w-[40.2w] max-lg:hidden">
        {hoveredThumbnail ? (
          <Image
            src={hoveredThumbnail.url}
            alt="ブログのサムネ"
            width={579}
            height={327}
            loading="lazy"
          />
        ) : (
          <div className="w-[40.2w] h-full bg-transparent" />
        )}
      </div>
      <div className="relative pt-[8.97vh] w-[40.2vw] h-[83vh] overflow-y-auto scrollbar-none max-lg:w-[93vw]">
        <ArticleList
          blog={data.contents}
          onHoverThumbnail={handleThumbnailHover}
        />
      </div>
    </>
  );
}
