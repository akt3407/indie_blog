import Image from "next/image";
import ArticleList from "../components/ArticleList";

export default function Page() {
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
    </>
  );
}
