import Image from "next/image";
import ArticleList from "../_components/ArticleList";
import { getBlogList } from "../_libs/microcms";

export default async function Page() {
  const data = await getBlogList();

  return (
    <>
      <div className="col-start-1 col-span-6 ml-[4.58vw] relative top-[8.97vh] aspect-video w-[40.2w]">
        <Image
          src="/sample_img.jpg"
          alt="ブログのサムネ"
          width={579}
          height={327}
          loading="lazy"
        />
      </div>
      <div className="relative pt-[8.97vh] w-[40.2vw] h-[83vh] overflow-y-auto scrollbar-none">
        <ArticleList blog={data.contents} />
      </div>
    </>
  );
}
