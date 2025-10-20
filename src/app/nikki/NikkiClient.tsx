"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ArticleList from "../_components/ArticleList";
import { Blog } from "../_libs/microcms";

type Props = {
  data: { contents: Blog[] };
};

export default function NikkiClient({ data }: Props) {
  const [hoveredThumbnail, setHoveredThumbnail] = useState<
    Blog["thumbnail"] | null
  >(null);

  // 最新記事のサムネイルを初期表示
  useEffect(() => {
    if (data.contents.length > 0) {
      setHoveredThumbnail(data.contents[0].thumbnail);
    }
  }, [data.contents]);

  return (
    <>
      <div className="col-start-1 col-span-6 ml-[4.58vw] relative top-[8.97vh] aspect-video w-[40.2w]">
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            hoveredThumbnail ? "opacity-100" : "opacity-0"
          }`}
        >
          {hoveredThumbnail && (
            <Image
              src={hoveredThumbnail.url}
              alt="ブログのサムネ"
              width={579}
              height={327}
              loading="lazy"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          )}
        </div>
      </div>
      <div className="relative pt-[8.97vh] w-[40.2vw] h-[83vh] overflow-y-auto scrollbar-none">
        <ArticleList
          blog={data.contents}
          onHoverThumbnail={setHoveredThumbnail}
        />
      </div>
    </>
  );
}
