import Image from "next/image";
import Link from "next/link";

import { Blog } from "../_libs/microcms";
import Category from "./atoms/Category";
import Date from "./atoms/Date";

type Props = {
  data: Blog;
};

export default function Article({ data }: Props) {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-[3.5vw] w-[93vw]">
        <dl className="col-start-2 col-span-2 relative ml-[-3.5vw] top-[8.97vh] w-[31.875vw] self-start max-lg:w-[50vw]">
          <dt className="flex justify-start items-center gap-4">
            <Date date={data.publishedAt ?? data.createdAt} />
            <Link href="/">
              <Category category={data.category} />
            </Link>
          </dt>
          <dd className="mt-4">
            <h2 className="text-lg text-text font-secondary leading-[1.6] tracking-[0.1rem] max-lg:text-md">
              {data.title}
            </h2>
          </dd>
        </dl>
        <div className="col-start-5 col-span-6 relative w-[50vw] h-[71vh] top-[8.97vh] ml-[6.4vw] overflow-y-auto scrollbar-none max-lg:col-start-2 max-lg:ml-[-3.5vw] max-lg:mt-5 max-lg:w-[84vw] max-lg:h-[58vh]">
          <div className="h-full">
            <div className="aspect-video">
              <Image
                src={data.thumbnail.url}
                alt=""
                width={data.thumbnail.width}
                height={data.thumbnail.height}
                loading="lazy"
              />
            </div>
            <p
              className="mt-4 blog-content"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
