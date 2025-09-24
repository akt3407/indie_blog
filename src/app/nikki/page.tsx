import Image from "next/image";
import ArticleList from "../components/ArticleList";

export default function Page() {
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
      <div className="relative pt-[8.97vh] w-[41.7vw] h-[82.5vh] overflow-y-auto scrollbar-none">
        <ArticleList />
      </div>
    </>
  );
}
