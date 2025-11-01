import Link from "next/link";
import Category from "./atoms/Category";

import { Blog } from "../_libs/microcms";
import Date from "./atoms/Date";

type Props = {
  blog: Blog[];
  onHoverThumbnail: (thumbnail: Blog["thumbnail"] | null) => void;
};

export default function ArticleList({ blog, onHoverThumbnail }: Props) {
  return (
    <>
      {!blog || blog.length === 0 ? (
        <p>記事がありません。</p>
      ) : (
        <ul className="relative col-start-7 col-span-4">
          {blog.map((article) => (
            <li
              key={article.id}
              data-cursor=""
              className="py-6 px-8 border-t-1 border-b-1 border-border max-lg:py-4 max-lg:px-6"
              onMouseEnter={() => onHoverThumbnail(article.thumbnail)}
              onMouseLeave={() => onHoverThumbnail(null)}
            >
              <Link href={`/nikki/${article.id}`} className="block">
                <dl>
                  <dt className="flex justify-start items-center gap-4">
                    <Date date={article.publishedAt ?? article.createdAt} />
                    <Category category={article.category} />
                  </dt>
                  <dd className="mt-4 max-sm:mt-3">
                    <p className="text-md text-text font-secondary leading-[1.6] tracking-[0.2rem] truncate max-lg:text-base">
                      {article.title}
                    </p>
                  </dd>
                </dl>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
